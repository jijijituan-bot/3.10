# 图片上传网站 - ImgBB 图床集成

一个简洁的图片上传网站，上传到 ImgBB 免费图床，生成永久有效的公网 URL。

## 功能特点

- ✅ 点击按钮上传图片
- ✅ 拖拽图片到上传区域
- ✅ 实时图片预览
- ✅ 自动上传到 ImgBB 图床
- ✅ 生成永久有效的公网 URL
- ✅ 一键复制功能
- ✅ 完全免费

## 配置步骤

### 1. 获取 ImgBB API Key

1. 访问 [ImgBB API](https://api.imgbb.com/)
2. 点击 "Get API key" 按钮
3. 注册或登录账号（可使用 Google 账号）
4. 填写应用名称（随便填，如 "Image Uploader"）
5. 点击 "Get API key"
6. 复制生成的 API Key

### 2. 配置网站

打开 `script.js` 文件，找到第 65 行左右：

```javascript
const IMGBB_API_KEY = 'YOUR_IMGBB_API_KEY_HERE';
```

将 `YOUR_IMGBB_API_KEY_HERE` 替换为你的 API Key：

```javascript
const IMGBB_API_KEY = '1234567890abcdef1234567890abcdef';
```

### 3. 运行网站

**方式1（简单）：** 直接双击打开 `index.html` 文件

**方式2（推荐）：** 使用本地服务器
```bash
# 双击运行
start-server.bat

# 或手动运行
node server.js

# 然后访问 http://localhost:8080
```

## 文件说明

- `index.html` - 主页面
- `style.css` - 样式文件
- `script.js` - 功能脚本（ImgBB API 集成）
- `server.js` - 本地服务器（可选）
- `获取ImgBB_API_Key.md` - API Key 获取教程

## ImgBB 图床特点

- ✅ **完全免费**
- ✅ **永久有效**（图片不会过期）
- ✅ **公网访问**（任何人都可以访问）
- ✅ **CDN 加速**（全球快速访问）
- ✅ **支持直链**（可直接用于网页）
- ⚠️ 单张图片最大 32MB
- ⚠️ 免费版有请求限制（个人使用足够）

## 生成的 URL 格式

上传成功后会得到：

```
https://i.ibb.co/xxxxxx/image.png
```

这个 URL 可以：
- 直接在浏览器中打开
- 用于网页的 `<img>` 标签
- 分享给任何人
- **永久有效，不会过期**

## 注意事项

⚠️ **保护你的 API Key**：不要将包含 API Key 的代码公开到 GitHub 等平台

⚠️ **删除链接**：上传成功后会在控制台显示删除链接，保存好以便将来删除图片

⚠️ **使用限制**：ImgBB 免费版有请求频率限制，正常使用不会触发

## 其他图床选择

如果 ImgBB 不满足需求，还可以使用：

1. **SM.MS** - https://sm.ms/
2. **路过图床** - https://imgtu.com/
3. **Cloudinary** - https://cloudinary.com/

需要集成其他图床服务，请告诉我！
