import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
import store from "@/store";

const app = createApp(App);
app.use(router).use(store).use(Antd).mount("#app");
