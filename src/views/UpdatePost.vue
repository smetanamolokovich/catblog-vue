<template>
  <div class="update-post">
    <h2>Update post</h2>

    <blog-form @submit="updatePost" :postInput="post" class="mt-5"></blog-form>
  </div>
</template>
<script>
export default {
  computed: {
    post() {
      return this.$store.getters.getByPostID(Number(this.$route.params.id));
    },
  },
  methods: {
    updatePost(post) {
      this.$store.dispatch("updatePost", { post });
      this.$router.push("/admin");
    },
  },
};
</script>
