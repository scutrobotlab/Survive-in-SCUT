import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      prefix: "docs/",
      link: "docs/",
      children: [
        "",
        {
          text: "Aspiration",
          prefix: "ambition/",
          link: "ambition/",
          icon: "activity",
          children: "structure"
        },
        {
          text: "Newbee!!!",
          prefix: "newbee/",
          link: "newbee/",
          icon: "launch",
          children: "structure"
        },
        {
          text: "About",
          prefix: "about/",
          link: "about/",
          icon: "info",
          children: "structure"
        }
      ],
    },
  ],
});
