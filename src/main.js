/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VWave from "v-wave";
import "./index.css";
createApp(App)
  .use(router)
  .use(VWave, {
    color: "currentColor",
    initialOpacity: 0.2,
    finialOpacity: 0.1,
    duration: 0.4,
    easing: "ease-out",
  })
  .mount("#app");
