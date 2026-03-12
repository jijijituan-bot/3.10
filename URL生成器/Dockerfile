# 使用官方 Node.js 镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package.json ./

# 安装依赖（如果有的话）
RUN npm install --production || true

# 复制所有文件
COPY . .

# 暴露端口
EXPOSE 8080

# 启动应用
CMD ["node", "app.js"]