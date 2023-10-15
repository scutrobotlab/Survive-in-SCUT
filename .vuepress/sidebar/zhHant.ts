import { sidebar } from "vuepress-theme-hope";

export const zhHantSidebar = sidebar({
  "/zh-Hant/": [
    {
      prefix: "docs/",
      link: "docs/",
      children: [
        "",
        {
          text: "立志篇",
          prefix: "ambition/",
          link: "ambition/",
          icon: "activity",
          children: "structure"
        },
        {
          text: "致新生",
          prefix: "newbee/",
          link: "newbee/",
          icon: "launch",
          children: "structure"
        },
        {
          text: "關於",
          prefix: "about/",
          link: "about/",
          icon: "info",
          children: "structure"
        }
      ],
    },
  ],
});
