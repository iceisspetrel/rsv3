import { createApp } from "vue";
import App from "@/App.vue";
import "@/index.scss";
import { router } from "@/router";
import { globalDirectiveRegister } from "@/directives";

const app = createApp(App).use(router);
globalDirectiveRegister(app);

app.mount("#app");
