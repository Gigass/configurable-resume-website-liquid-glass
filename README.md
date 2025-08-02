# 响应式个人作品集网站

这是一个现代、功能完备、完全响应式的个人作品集网站。它采用 Vue 3, Vite 和 TypeScript 构建，拥有独特的“液态玻璃”UI效果，旨在为PC和移动端等不同设备提供卓越的浏览体验。

---

## 🚀 快速上手：三步搭建您的网站 (无需编程)

本指南适用于不熟悉编程、希望最快速搭建网站的用户。

### 第一步：下载预构建包

1.  访问本项目的 [GitHub Releases 页面](https://github.com/Gigass/configurable-resume-website-liquid-glass) (请将 `your-username/mywebsite` 替换为您的实际仓库地址)。
2.  下载最新版本 (V1.0 或更高) 下的 `dist.zip` 文件。
3.  在您的电脑上解压这个 `dist.zip` 文件，您会得到一个名为 `dist` 的文件夹。

### 第二步：修改个人信息

您网站的所有内容都由一个文件控制，您只需修改这一个文件即可。

1.  在解压后的 `dist` 文件夹中，找到并打开路径为 `data/sitedata.json` 的文件。
2.  **(推荐)** 为了快速生成您自己的信息，请访问 [AI简历信息生成器](https://www.coze.cn/store/agent/7533541654746546211?bot_id=true)，上传您的简历，AI会自动生成`json`内容。复制所有生成的内容。
3.  将您准备好的 `json` 内容，**完全替换** `sitedata.json` 文件中原有的所有内容，然后保存文件。

### 第三步：发布您的网站

现在，`dist` 文件夹里已经是您自己的定制化网站了。

1.  将 `dist` 文件夹内的 **所有文件** (而不是 `dist` 文件夹本身) 上传到任何静态网站托管服务。
2.  推荐的服务有 [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/) 等，它们通常提供免费的托管计划，您只需将文件拖拽上去即可完成发布。

恭喜！您的个人网站已经成功上线！

---

## 🛠️ 开发者指南 (深入定制)

本指南适用于希望克隆源码、进行二次开发或深入定制的用户。

### 核心特性

- **完全响应式**: 无缝适配各种屏幕尺寸，从大屏桌面到移动电话。
- **液态玻璃UI**: 独特且富有视觉吸引力的毛玻璃质感界面。
- **数据驱动**: 网站内容由 `sitedata.json` 文件动态加载，方便更新。
- **沉浸式交互**: 拥有平滑的页面过渡、动画轮播图和交互式卡片。
- **现代化技术栈**: 基于最新的网络技术构建，包括 Vue 3 (组合式 API), Vite, 和 TypeScript。

### 项目截图

| 首页 | 开源项目 |
| :---: | :---: |
| ![Home Page Screenshot 1](public/screenshots/SCR-home.png) | ![Open Source Projects Screenshot](public/screenshots/SCR-opensource.png) |

| 作品集 | 全屏轮播 |
| :---: | :---: |
| ![Project Showcase Screenshot](public/screenshots/SCR-project.png) | ![Home Page Screenshot 2](public/screenshots/SCR-home2.png) |


### 环境要求

- [Node.js](https://nodejs.org/) (推荐 18.x 或更高版本)
- [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)

### 安装

1. 克隆仓库:
   ```sh
   git clone https://github.com/your-username/mywebsite.git
   ```
2. 进入项目目录:
   ```sh
   cd mywebsite
   ```
3. 安装依赖:
   ```sh
   npm install
   ```

### 本地开发

启动一个支持热重载的本地开发服务器:
```sh
npm run dev
```
应用将在 `http://localhost:5173` 上可用。

### 打包构建

编译和压缩应用以用于生产环境:
```sh
npm run build
```
输出的文件将位于 `dist/` 目录中。
