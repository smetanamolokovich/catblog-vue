<template>
  <div class="post-page">
    <div class="post" v-if="post">
      <h2>{{ post.title }}</h2>
      <v-subheader>{{ post.author }} - {{ post.createdAt }}</v-subheader>
      <v-img
        lazy-src="https://via.placeholder.com/700.png?text=?"
        class="rounded-lg"
        cover
        max-height="400"
        :src="post.imgURL"
      ></v-img>
      <p class="text-justify mt-5" style="white-space: pre-wrap">
        {{ post.content }}
      </p>

      <div class="text-center">
        <v-btn class="ma-2" outlined @click="$router.push('/')">
          <v-icon left> mdi-arrow-left-top </v-icon>Back to homepage
        </v-btn>
      </div>
    </div>
    <div class="text-center" v-else>
      <h2 class="text--disabled">Post not found...</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: this.$store.getters.getByPostID(Number(this.$route.params.id)),
    };
  },
};
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
}
</style>
