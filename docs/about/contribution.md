---
title: 如何贡献
---

> ## 搭建技术
> 华工生存指南使用 [VuePress](https://v2.vuepress.vuejs.org/) 构建，使用 [Hope](https://theme-hope.vuejs.press/) 主题，托管于 [GitHub Pages](https://pages.github.com/)

## 撰写你的文档
### 添加文档
在 `docs` 目录下新建文件夹，或在对应分类文件夹下新建 `markdown` 文件，编辑其并添加
目录结构
```
// .vuepress/sidebar/{lang}.ts
docs
│
├── about  → 关于
│
│── ambition  → 立志篇
│ 
│── newbee  → 新生篇
│
├── README.md  → 主页

### 处理文档资源
```
:::tip 
图片资源等应放在 `.vuepress/public` 目录下
:::

## 更精美的排版
[Markdown 基础用法](https://theme-hope.vuejs.press/zh/cookbook/markdown/#%E5%88%97%E8%A1%A8)
[Markdown 增强](https://plugin-md-enhance.vuejs.press/zh/guide/#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA)

:::danger 排版太丑的PR可能会被拒绝
:::

## 本地预览
:::warning
需要环境: [Node.js](https://nodejs.org/) ≥ 18
:::
### 克隆本仓库
```bash
git clone https://github.com/scutrobotlab/Survive-in-SCUT.git
# Use https://ghproxy.com/https://github.com/scutrobotlab/Survive-in-SCUT.git if you need it.
```
### 进入仓库目录
```bash
cd Survive-in-SCUT
```
### 安装 `npm` 包
```bash
npm install
```
### 启动本地服务器
```bash
npm run docs:dev
```
### 打开浏览器预览

## 学习 `Github` 的协作
> [GitHub Guides](https://guides.github.com/)
1. `Fork` 本仓库
2. 新建分支
3. 提交修改
4. 发起 `Pull Request`
5. 等待审核
6. 等待 `Github Actions` 自动部署

:::tip 
你也可以尝试 [Github Codespaces](https://docs.github.com/codespaces)
:::