<template>
  <div class="admin-table">
    <v-simple-table v-if="posts && posts.length" :height="350">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left hidden-xs-only">Author</th>
            <th class="text-left hidden-md-and-down">Date</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.title }}</td>
            <td class="hidden-xs-only">{{ post.author }}</td>
            <td class="hidden-md-and-down">{{ post.createdAt }}</td>
            <td style="width: 111px">
              <div class="text-center">
                <v-btn
                  fab
                  x-small
                  color="warning"
                  class="mr-2"
                  @click="$router.push(`/update/${post.id}`)"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
                <v-btn fab x-small color="error" @click="deletePost(post.id)">
                  <v-icon> mdi-trash-can </v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h3 v-else class="text-center text--disabled">
      There are no posts in the list...
    </h3>
  </div>
</template>
<script>
export default {
  name: "admin-table",
  props: {
    posts: Array,
  },
  data() {
    return {
      dialog: false,
      post: null,
    };
  },
  methods: {
    deletePost(postID) {
      this.$store.dispatch("deletePost", { postID });
    },
  },
};
</script>
