import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.scss";
import { router } from "@/router";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { directives } from "@/directives";
import { store } from "@/store";

const app = createApp(App).use(router);
const pinia = createPinia();

app.use(directives);
app.use(ElementPlus, { size: "small" });
app.use(pinia).use(store);

console.log("process.env.TEST", process.env.TEST);

app.mount("#app");
