import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.scss";
import { router } from "@/router";
import { createPinia } from "pinia";
import { directives } from "@/directives";
import { store } from "@/store";

const app = createApp(App).use(router);
const pinia = createPinia();
app.use(directives);
app.use(pinia).use(store);

app.mount("#app");
