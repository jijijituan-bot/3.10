# Railway 部署指南

## 🚀 快速部署步骤

### 1. 准备工作
确保你的项目包含以下文件：
- ✅ `package.json` - 已配置
- ✅ `app.js` - 已优化
- ✅ `Dockerfile` - 已创建
- ✅ 所有静态文件（HTML、CSS、JS）

### 2. Railway 部署方法

#### 方法一：GitHub 连接（推荐）
1. 将代码推送到 GitHub 仓库
2. 登录 [Railway.app](https://railway.app)
3. 点击 "New Project"
4. 选择 "Deploy from GitHub repo"
5. 选择你的仓库
6. Railway 会自动检测并部署

#### 方法二：Railway CLI
```bash
# 安装 Railway CLI
npm install -g @railway/cli

# 登录
railway login

# 初始化项目
railway init

# 部署
railway up
```

### 3. 环境变量配置
在 Railway 控制台中设置：
- `PORT`: 自动设置，无需手动配置
- `NODE_ENV`: production

### 4. 部署后验证
访问以下端点确认部署成功：
- `/` - 主页（图片上传工具）
- `/health` - 健康检查
- `/video-to-gif-offline.html` - 视频转GIF工具
- `/config.html` - API配置助手

## 🔧 常见问题解决

### 问题1：端口冲突
**解决方案**：Railway 会自动分配端口，代码已配置 `process.env.PORT`

### 问题2：文件路径问题
**解决方案**：使用相对路径，代码已处理路径安全检查

### 问题3：CORS 错误
**解决方案**：已在 `app.js` 中配置 CORS 头

### 问题4：健康检查失败
**解决方案**：访问 `/health` 端点检查服务器状态

## 📱 功能特性

### ✅ 已实现功能
- 🖼️ 图片上传（ImgBB API集成）
- 🎬 视频转GIF（多种方案）
- ⚙️ API配置助手
- 💚 健康检查端点
- 🔒 安全防护（CORS、XSS、目录遍历）
- 🎨 科技感UI设计

### 🔗 API集成
- **ImgBB API Key**: `35ba520f460239f6040b2342e05f9ddd`
- **支持格式**: JPG, PNG, GIF, WebP
- **文件大小**: 最大 32MB
- **永久链接**: 是

## 🌐 部署后的URL结构
```
https://your-app.railway.app/
├── /                          # 主页（图片上传）
├── /video-to-gif-offline.html # 视频转GIF工具
├── /video-to-gif-simple.html  # 简化版视频转GIF
├── /config.html               # API配置助手
├── /health                    # 健康检查
└── /static-files              # 其他静态资源
```

## 🎯 下一步优化建议

1. **自定义域名**: 在Railway控制台绑定自定义域名
2. **CDN加速**: 考虑使用Cloudflare等CDN服务
3. **监控告警**: 设置Railway的监控和告警
4. **备份策略**: 定期备份重要配置和数据

## 📞 技术支持

如果遇到部署问题：
1. 检查Railway控制台的部署日志
2. 访问 `/health` 端点检查服务状态
3. 确认所有文件都已正确上传
4. 检查环境变量配置

---
**部署时间**: 通常 2-5 分钟
**状态**: ✅ 生产就绪
**维护**: 零维护成本