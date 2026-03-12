# 视频转GIF - 离线版本配置

## 问题说明

如果遇到 "Failed to construct 'Worker'" 或 CDN 加载失败的错误，说明无法从在线 CDN 加载 FFmpeg 库。

## 解决方案

### 方案1：使用国内镜像（推荐）

已经在代码中使用了 jsdelivr CDN（国内访问更快），刷新页面重试即可。

### 方案2：下载离线库文件

如果网络不稳定，可以下载库文件到本地：

1. **创建 libs 文件夹**
   ```
   在项目根目录创建 libs 文件夹
   ```

2. **下载以下文件到 libs 文件夹：**
   
   - ffmpeg.js
     https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/umd/ffmpeg.js
   
   - ffmpeg-core.js
     https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js
   
   - ffmpeg-core.wasm
     https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm

3. **修改 video-to-gif.js**
   
   将第 115 行的：
   ```javascript
   script.src = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/umd/ffmpeg.js';
   ```
   
   改为：
   ```javascript
   script.src = './libs/ffmpeg.js';
   ```
   
   将第 133-134 行的：
   ```javascript
   coreURL: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js',
   wasmURL: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm',
   ```
   
   改为：
   ```javascript
   coreURL: './libs/ffmpeg-core.js',
   wasmURL: './libs/ffmpeg-core.wasm',
   ```

### 方案3：使用本地服务器

如果直接打开 HTML 文件遇到跨域问题，使用本地服务器：

**使用 Node.js：**
```bash
node server.js
# 然后访问 http://localhost:8080/video-to-gif.html
```

**使用 Python：**
```bash
python -m http.server 8080
# 然后访问 http://localhost:8080/video-to-gif.html
```

### 方案4：使用在线工具（临时方案）

如果以上方案都不行，可以使用这些在线工具：
- https://ezgif.com/ （功能强大）
- https://cloudconvert.com/ （支持多种格式）
- https://www.img2go.com/ （简单易用）

## 常见错误及解决

### 错误1：Failed to construct 'Worker'
**原因：** CDN 加载失败或跨域问题
**解决：** 使用方案2（离线库）或方案3（本地服务器）

### 错误2：Script cannot be accessed from origin 'null'
**原因：** 直接打开 HTML 文件导致的跨域问题
**解决：** 使用方案3（本地服务器）

### 错误3：网络连接超时
**原因：** 网络不稳定或防火墙拦截
**解决：** 
1. 检查网络连接
2. 关闭防火墙/代理
3. 使用方案2（离线库）

### 错误4：浏览器不支持
**原因：** 浏览器版本过旧
**解决：** 更新到最新版本的 Chrome、Edge 或 Firefox

## 推荐配置

**最佳方案（稳定性最高）：**
1. 下载离线库文件（方案2）
2. 使用本地服务器运行（方案3）
3. 使用现代浏览器（Chrome/Edge 最新版）

**快速方案（适合临时使用）：**
1. 确保网络连接稳定
2. 刷新页面重试
3. 如果还是失败，使用在线工具（方案4）

## 技术支持

如果以上方案都无法解决问题，请提供：
1. 浏览器版本
2. 操作系统
3. 完整的错误信息截图
4. 是否使用了代理/VPN

我会帮你进一步诊断问题！
