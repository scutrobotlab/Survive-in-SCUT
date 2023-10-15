import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import plugins from "./plugins.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "华工生存手册",
    },
    "/zh-Hant/": {
      lang: "zh-TW",
      title: "華工生存手冊",
    },
    "/en/": {
      lang: "en-US",
      title: "Survive in SCUT",
    },
  },

  theme,

  plugins,

  shouldPrefetch: false,
});
