import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "java",
      icon: "tip",
      link: "java/",
      prefix: "java/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "LeetCode",
      icon: "tip",
      link: "leetcode/",
      prefix: "leetcode/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "常用框架",
      icon: "tip",
      link: "framework/",
      prefix: "framework/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "数据库",
      icon: "tip",
      link: "database/",
      prefix: "database/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "计算机基础",
      icon: "tip",
      link: "basics/",
      prefix: "basics/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "常用工具",
      icon: "tip",
      link: "tools/",
      prefix: "tools/",
      collapsable: true,
      children: [{
        text: "linux",
        icon: "tip",
        link: "linux/",
        prefix: "linux/",
        children: ["01.安装linux系统的多种方式"],
      }, ]
    },
    {
      text: "English",
      icon: "tip",
      link: "English/",
      prefix: "English/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "二进制安全",
      icon: "tip",
      link: "pwn/",
      prefix: "pwn/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "python",
      icon: "tip",
      link: "python/",
      prefix: "python/",
      collapsable: true,
      children: [{
        icon: "note",
        text: "python基础：",
        prefix: "python基础/",
        link: "python基础/",
        children: "structure",
      },
        {
          icon: "discover",
          text: "Django：",
          prefix: "Django/",
          link: "Django/",
          children: "structure",
        },
      ],

    },

    // "slides",
  ],
  // "/pwn/": "structure",
  // "/python/": "structure",
});
