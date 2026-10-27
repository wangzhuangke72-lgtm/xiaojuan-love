# 小娟宝宝 ❤️ 我们的浪漫宇宙

这是一个无需构建工具的静态告白网站，使用 HTML、CSS 和原生 JavaScript，可直接部署到 GitHub Pages。页面不收集访问者信息。

## 文件

- `index.html`：页面结构与五幕内容
- `style.css`：粉色主题、响应式布局与动画
- `script.js`：场景切换、情书逐字显示、彩蛋和音乐控制
- `assets/README.txt`：本地音乐放置说明

## 本地预览

将项目文件放在同一文件夹中，直接用浏览器打开 `index.html` 即可预览。也可以在该文件夹运行 `python -m http.server 8000`，再访问 `http://localhost:8000`。

## 添加背景音乐

将你有权使用的 MP3 文件命名为 `music.mp3`，放入 `assets` 文件夹。点击页面右上角音乐图标即可播放或暂停；网站不会自动播放音乐。若文件尚未添加，点击按钮会提示添加路径。

## 修改称呼和文字

在 `script.js` 顶部的 `COPY` 对象中修改 `nickname` 和 `letter`。故事正文、开场提示和按钮文案可在 `index.html` 中搜索对应中文直接修改。保存后刷新预览。

## 发布到 GitHub Pages

1. 登录 GitHub，创建一个新的公开仓库（例如 `love-letter`）。
2. 将本项目的全部文件和 `assets` 文件夹上传到仓库根目录并提交。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 `main`、目录选 `/(root)`，保存。
5. 等待 GitHub Pages 部署完成。页面地址通常为 `https://你的用户名.github.io/love-letter/`。若仓库名是 `你的用户名.github.io`，地址则是 `https://你的用户名.github.io/`。

将 Pages 设置页面显示的公开网址复制到微信聊天发送即可。首次发布可能需要几分钟生效。仓库公开后，上传的音乐文件也会公开可访问，请只放适合公开分享且你有权使用的音频。
