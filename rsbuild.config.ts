import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginSass } from "@rsbuild/plugin-sass";
import path from "node:path";

const assetPrefix = process.env.ASSET_PREFIX || "./";
const distRootPath = process.env.DIST_ROOT_PATH || "dist";

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  html: {
    // 设置网站图标，自动匹配output.assetPrefix或者dev.assetPrefix
    favicon: path.resolve(__dirname, "public", "favicon.png"),
    // 设置网页入口html模板文件
    template: path.resolve(__dirname, "public", "index.html"),
    // 设置网页中可使用的参数
    // 使用方式 <%= title %>
    templateParameters: {
      title: "网页标题"
    }
  },
  source: {
    entry: {
      index: path.resolve(__dirname, "src", "main.ts")
    },
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    // 定义编译时环境变量
    define: {
      "process.env": JSON.stringify({
        ASSET_PREFIX: assetPrefix,
        DIST_ROOT_PATH: distRootPath
      }),
      "process.env.TEST": JSON.stringify("process_env_test")
    }
  },
  output: {
    assetPrefix: assetPrefix,
    cleanDistPath: true,
    distPath: {
      // 设置打包输出目录
      root: path.resolve(__dirname, distRootPath)
    }
  },
  dev: {
    assetPrefix: assetPrefix
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
