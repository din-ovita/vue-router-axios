import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

Vue.config.productioonTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
