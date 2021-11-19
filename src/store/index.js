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
    paginate: (state) => (currentPage, postPerPage) =>
      state.posts.slice(currentPage, postPerPage),
  },
  mutations: {
    addNewPost: (state, post) => {
      state.posts.push(post);
    },
    removePost: (state, postID) => {
      state.posts = state.posts.filter((post) => post.id !== postID);
    },
    replacePost: (state, post) => {
      state.posts.splice(
        state.posts.indexOf(state.posts.find((p) => p.id === post.id)),
        1,
        post
      );
    },
  },
  actions: {},
});
