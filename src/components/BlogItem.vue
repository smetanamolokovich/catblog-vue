<template>
  <v-col xl="6" lg="12" sm="12">
    <v-card outlined class="rounded-xl pa-3">
      <div
        ref="blogCard"
        v-resize="onResize"
        class="d-flex flex-no-wrap justify-space-between"
        :class="{ 'flex-column': windowSize <= 700 }"
      >
        <v-img
          :max-width="windowSize <= 700 ? 700 : 300"
          height="300"
          lazy-src="https://via.placeholder.com/300.png?text=?"
          class="rounded-xl"
          cover
          :src="post.imgURL"
        ></v-img>

        <div class="pa-3">
          <v-card-title
            class="text-h5 text--primary font-weight-bold"
            style="cursor: pointer"
            @click="$router.push(`/posts/${post.id}`)"
            >{{ post.title }}
          </v-card-title>

          <v-card-subtitle class="text--disabled"
            >{{ post.author }} - {{ post.createdAt }}</v-card-subtitle
          >

          <v-card-text>
            {{ summary(post.content) }}
          </v-card-text>

          <v-card-actions class="justify-end">
            <v-btn text @click="$router.push(`/posts/${post.id}`)">
              Read post
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "blog-item",
  props: {
    post: Object,
  },
  data() {
    return {
      windowSize: 0,
    };
  },
  computed: {},
  methods: {
    onResize() {
      this.windowSize = window.innerWidth;
    },
    summary(text, wordCount = 50) {
      return text.split(" ").slice(0, wordCount).join(" ") + " ...";
    },
  },
};
</script>
<style scoped></style>
