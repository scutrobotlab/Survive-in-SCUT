import { hopeTheme } from "vuepress-theme-hope";
import { enSidebar, zhSidebar, zhHantSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://scut.life",

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "scutrobotlab/Survive-in-SCUT",

  docsDir: "src",

  navbarAutoHide: "always",

  navbarLayout: {
    start: ["Brand", "Search"],
    end: ["Language", "Outlook", "Repo"]
  },

  locales: {
    "/": {
      sidebar: zhSidebar,

      displayFooter: false,
    },

   "/en/": {
      sidebar: enSidebar,

      displayFooter: false,
    },

    "/zh-Hant/": {
      sidebar: zhHantSidebar,

      displayFooter: false
    }
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOKgXN2w",
      category: "Announcements",
      categoryId: "DIC_kwDOKgXN284CaI5d",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cachePic: true,
       appendBase: true,
       manifest: {
         shortcuts: [
           {
             name: "华工生存手册",
             short_name: "scut.life",
             url: "/docs/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                 purpose: "maskable",
                 type: "image/png",
               },
             ],
           },
         ],
       },
     },
  },
});
