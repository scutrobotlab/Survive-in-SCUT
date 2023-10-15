import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
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
          text: "关于",
          prefix: "about/",
          link: "about/",
            icon: "info",
          children: "structure"
        }
      ],
    },
  ],
});
