<template>
  <div>
    <v-row v-if="posts && posts.length">
      <blog-item v-for="post in posts" :key="post.id" :post="post"></blog-item>
    </v-row>
    <h3 v-else class="text-center text--disabled">
      There are no posts in the list...
    </h3>
  </div>
</template>
<script>
export default {
  name: "blog-list",
  props: {
    posts: Array,
  },
};
</script>
