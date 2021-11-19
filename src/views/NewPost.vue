<template>
  <div class="new-post">
    <h2>Create new post</h2>

    <blog-form @submit="createPost" class="mt-5"></blog-form>
  </div>
</template>
<script>
export default {
  methods: {
    createPost(newPost) {
      this.$store.commit("addNewPost", newPost);
      this.$router.push("/admin");
    },
  },
};
</script>
