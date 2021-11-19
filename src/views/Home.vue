<template>
  <div class="home">
    <h1>Recent posts</h1>

    <blog-pagination
      @paginate="paginate"
      :items="$store.state.posts"
      :postsPerPage="postsPerPage"
    ></blog-pagination>

    <div class="posts-container my-10">
      <blog-list :posts="postSlices"></blog-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postsPerPage: 4,
      postSlices: [],
    };
  },
  mounted() {
    this.postSlices = this.$store.getters.paginate(0, this.postsPerPage);
  },
  methods: {
    paginate(items) {
      this.postSlices = items;
    },
  },
};
</script>
