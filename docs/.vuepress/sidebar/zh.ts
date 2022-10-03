import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "note",
      prefix: "pwn/",
      children: "structure",
    },
    {
      // 必要的，分组的标题文字
      text: "二进制安全",
      // 可选的, 分组标题对应的图标
      icon: "tip",
      // 可选的, 分组标题对应的链接
      link: "/pwn/",
      // 可选的，会添加到每个 item 链接地址之前
      prefix: "/pwn/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsable: true,
      // 必要的，分组的子项目
      children: [
        "README.md" /* /foo/index.html */,
        "GCC 参数详解.md",
        "pwn入门01---环境配置.md",
        "pwn入门02---汇编函数调用过程.md",
        "pwn入门03---ret2text.md",
        "pwn入门04---ret2shellcode.md",
        "pwn入门05---ret2syscall.md",
        "pwn入门06--ret2libc.md",
        "pwn入门07--整数安全.md",
        "pwn入门08---堆利用之uaf.md",
      ],
    },
    "slides",
  ],
});
