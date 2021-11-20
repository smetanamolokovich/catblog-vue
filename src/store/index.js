import Vue from "vue";
import Vuex from "vuex";

import posts from "./posts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { posts },
  getters: {
    sortedByID: (state) => state.posts.sort((a, b) => a - b),
    getByPostID: (state) => (postID) =>
      state.posts.find((post) => post.id === postID),
    getSlice: (state) => (currentPage, postPerPage) =>
      state.posts.slice(currentPage, postPerPage),
  },
  mutations: {
    ADD_NEW_POST: (state, post) => {
      state.posts.push(post);
    },
    REMOVE_POST: (state, postID) => {
      state.posts = state.posts.filter((post) => post.id !== postID);
    },
    REPLACE_POST: (state, post) => {
      state.posts.splice(
        state.posts.indexOf(state.posts.find((p) => p.id === post.id)),
        1,
        post
      );
    },
  },
  actions: {
    createPost(ctx, { newPost }) {
      ctx.commit("ADD_NEW_POST", newPost);
    },
    deletePost(ctx, { postID }) {
      ctx.commit("REMOVE_POST", postID);
    },
    updatePost(ctx, { post }) {
      ctx.commit("REPLACE_POST", post);
    },
  },
});
