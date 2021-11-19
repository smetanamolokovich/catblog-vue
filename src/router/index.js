import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewPost from "../views/NewPost.vue";
import Post from "../views/Post.vue";
import UpdatePost from "../views/UpdatePost.vue";
import AdminPanel from "../views/AdminPanel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/create",
    name: "new-post",
    component: NewPost,
  },
  {
    path: "/admin",
    name: "admin-panel",
    component: AdminPanel,
  },
  {
    path: "/posts/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/update/:id",
    name: "update-post",
    component: UpdatePost,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
