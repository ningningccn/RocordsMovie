import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { auth } from "@/db";
import { onAuthStateChanged } from "firebase/auth";
router.beforeEach((to, from, next) => {
  console.log("to.meta.requiresAuth: ", to.meta.requiresAuth);
  if (to.meta.requiresAuth) {
    console.log(`這需要認證`);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("存在");
        next();
      } else {
        console.log("沒有登入");
        next({
          path: "/login",
        });
      }
    });
  } else {
    console.log("沒有登入");
    next();
  }
});
createApp(App).use(router).use(store).mount("#app");
