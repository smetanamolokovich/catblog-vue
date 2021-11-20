<template>
  <div class="home">
    <h1>Recent posts</h1>

    <blog-pagination
      @paginate="paginate"
      :items="posts"
      :itemsPerPage="postsPerPage"
    ></blog-pagination>

    <blog-list class="my-10" :posts="postSlice"></blog-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postsPerPage: 4,
      postSlice: [],
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    getPostsSlice() {
      return (itemsPerPage) =>
        this.$store.getters.getPostsSlice(0, itemsPerPage);
    },
  },
  mounted() {
    // Page initialization
    this.initPage(this.postsPerPage);
  },
  methods: {
    paginate(items) {
      this.postSlice = items;
    },
    initPage(itemsPerPage) {
      this.postSlice = this.getPostsSlice(itemsPerPage);
    },
  },
};
</script>
