<template>
  <v-form @submit.prevent="submitForm" ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="post.title"
            label="Post Title"
            outlined
            :rules="[rules.required]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="post.author"
            :items="authors"
            item-text="state"
            item-value="abbr"
            label="Author"
            outlined
            :rules="[rules.required]"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="post.imgURL"
            label="Image URL"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="post.content"
            outlined
            required
            :rules="[rules.content]"
            counter
          >
            <template v-slot:label>
              <div>Post body...</div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>

      <v-btn color="primary" type="submit" class="mt-5"> Submit </v-btn>
    </v-container>
  </v-form>
</template>
<script>
import moment from "moment";

export default {
  name: "blog-form",
  props: { postInput: Object, default: undefined },
  data() {
    return {
      valid: false,
      authors: ["Elisabeth Strain", "John Doe"],
      post: {
        title: "",
        content: "",
        imgURL: "",
        author: "",
      },
      rules: {
        required: (value) => !!value || "This field is required.",
        content: (value) =>
          value.length >= 150 || "Must be at least 150 characters",
      },
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    if (this.postInput) {
      this.post = {
        title: this.postInput.title,
        content: this.postInput.content,
        imgURL: this.postInput.imgURL,
        author: this.postInput.author,
      };
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate();

      if (this.valid) {
        let id;

        if (this.posts.length) {
          id = this.postInput?.id || this.posts[this.posts.length - 1].id + 1;
        } else {
          id = 1;
        }

        const createdAt =
          this.postInput?.createdAt || moment().format("DD/MM/YYYY, hh:mm A");

        if (this.post.imgURL === "") {
          this.post.imgURL = "https://via.placeholder.com/300.png?text=?";
        }

        const newPost = { id, createdAt, ...this.post };

        this.$emit("submit", newPost);
        this.$refs.form.reset();
      }
    },
  },
};
</script>
