import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";
import components from "./components";

Vue.config.productionTip = false;

components.forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
