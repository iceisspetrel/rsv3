import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginSass } from "@rsbuild/plugin-sass";
import path from "node:path";

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  html: {
    template: path.resolve(__dirname, "public", "index.html")
  },
  source: {
    entry: {
      index: path.resolve(__dirname, "src", "main.ts")
    },
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  output: {
    assetPrefix: "./"
  },
  dev: {
    assetPrefix: "/test/abc/"
  },
  server: {
    publicDir: {
      name: path.resolve(__dirname, "public")
    },
    port: 8003,
    host: "0.0.0.0",
    proxy: {
      // 代理效果：http://localhost:3000/security/mvc-routes  ->  https://zpxx.chidi.com.cn:8200/security/mvc-routes
      "/security": {
        target: "https://zpxx.chidi.com.cn:8200"
      },
      "/api": {
        // 代理效果：http://localhost:3000/api -> https://zpxx.chidi.com.cn:8200
        // 代理效果：http://localhost:3000/api/foo -> https://zpxx.chidi.com.cn:8200/foo
        target: "https://zpxx.chidi.com.cn:8200",
        pathRewrite: { "^/api": "" }
      }
    }
  }
});
