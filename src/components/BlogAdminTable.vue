<template>
  <div class="admin-table">
    <v-simple-table v-if="posts && posts.length" :height="350">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Title</th>
            <th class="text-left">Author</th>
            <th class="text-left">Date</th>
            <th class="text-left"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.author }}</td>
            <td>{{ post.createdAt }}</td>
            <td>
              <div class="text-center">
                <v-btn
                  fab
                  x-small
                  color="warning"
                  class="mr-5"
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
