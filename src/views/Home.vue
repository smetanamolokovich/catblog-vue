<template>
  <div class="home">
    <h1>Recent posts</h1>

    <blog-pagination
      @paginate="paginate"
      :items="$store.state.posts"
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
    getSlice() {
      return (itemsPerPage) => this.$store.getters.getSlice(0, itemsPerPage);
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
      this.postSlice = this.getSlice(itemsPerPage);
    },
  },
};
</script>
