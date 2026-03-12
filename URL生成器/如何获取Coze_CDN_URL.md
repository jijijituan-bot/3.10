# 如何获取 Coze CDN URL

## 问题说明

Coze 的 `/v1/files/upload` API 只返回文件 ID，不直接返回可访问的 CDN URL（如 `https://lf-code-agent.coze.cn/...`）。

## CDN URL 的生成方式

Coze 的 CDN URL 是在以下场景中自动生成的：

### 方式1：通过 Coze 对话 API（推荐）

1. 先上传文件获取 file_id
2. 创建一个 Bot（智能体）
3. 通过对话 API 发送包含文件的消息
4. Coze 会在对话响应中返回 CDN URL

**示例代码：**

```javascript
// 步骤1：上传文件
const formData = new FormData();
formData.append('file', file);

const uploadResponse = await fetch('https://api.coze.cn/v1/files/upload', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_TOKEN'
    },
    body: formData
});

const { data } = await uploadResponse.json();
const fileId = data.id;

// 步骤2：通过对话 API 使用文件
const chatResponse = await fetch('https://api.coze.cn/v3/chat', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        bot_id: 'YOUR_BOT_ID', // 需要先在 Coze 平台创建一个 Bot
        user_id: 'user_123',
        stream: false,
        auto_save_history: false,
        additional_messages: [{
            role: 'user',
            content: `[{"type":"file","file_id":"${fileId}"}]`,
            content_type: 'object_string'
        }]
    })
});

// 在对话响应的消息中会包含 CDN URL
```

### 方式2：在 Coze 平台手动上传

1. 登录 [Coze 平台](https://www.coze.cn)
2. 创建或打开一个 Bot
3. 在对话框中上传图片
4. 右键点击图片 → 复制图片地址
5. 得到的就是 CDN URL

### 方式3：使用 Coze 插件

如果你开发 Coze 插件，当用户在对话中上传图片时，插件接收到的就是 CDN URL。

## CDN URL 特点

- ✅ 格式：`https://lf-code-agent.coze.cn/obj/x-ai-cn/page_image/xxxxx.png`
- ✅ 公网可访问
- ✅ CDN 加速
- ⚠️ 有效期：约 3 个月（根据 Coze 文档）

## 当前项目的解决方案

由于直接获取 CDN URL 需要 Bot ID 和对话流程，当前项目采用以下方案：

1. **本地存储**：文件保存在本地 `uploads` 目录
2. **本地 URL**：生成 `http://localhost:8080/uploads/xxx.png`
3. **Coze 备份**：同时上传到 Coze 获取 file_id（可用于 Coze 对话）

## 如果需要公网 CDN URL

建议使用以下免费图床服务：

1. **ImgBB**（推荐）
   - 免费，永久有效
   - API: https://api.imgbb.com/
   
2. **SM.MS**
   - 免费，有限额
   - API: https://sm.ms/doc/

3. **路过图床**
   - 免费
   - API: https://imgtu.com/

需要我帮你集成这些图床 API 吗？
