const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.md': 'text/markdown; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // 健康检查端点
    if (req.url === '/health' || req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'ok', 
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        }));
        return;
    }

    // 处理静态文件
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    
    // 安全检查，防止目录遍历
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
                    <!DOCTYPE html>
                    <html lang="zh-CN">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>图片上传工具 - Railway部署版</title>
                        <style>
                            body { 
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
                                text-align: center; 
                                padding: 50px; 
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                color: white; 
                                margin: 0;
                                min-height: 100vh;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                            }
                            .container {
                                background: rgba(255, 255, 255, 0.1);
                                backdrop-filter: blur(10px);
                                padding: 40px;
                                border-radius: 20px;
                                border: 1px solid rgba(255, 255, 255, 0.2);
                                max-width: 500px;
                            }
                            h1 { color: white; margin-bottom: 30px; font-size: 48px; }
                            .links { max-width: 400px; margin: 0 auto; }
                            .links a { 
                                display: block;
                                color: white; 
                                text-decoration: none; 
                                padding: 15px 25px;
                                margin: 15px 0;
                                background: rgba(255, 255, 255, 0.2);
                                border-radius: 12px;
                                border: 1px solid rgba(255, 255, 255, 0.3);
                                transition: all 0.3s ease;
                                font-weight: 600;
                            }
                            .links a:hover {
                                background: rgba(255, 255, 255, 0.3);
                                transform: translateY(-3px);
                                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                            }
                            .status {
                                background: rgba(0, 255, 0, 0.2);
                                padding: 10px;
                                border-radius: 8px;
                                margin: 20px 0;
                                border: 1px solid rgba(0, 255, 0, 0.3);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>🚀</h1>
                            <h2>图片上传工具</h2>
                            <div class="status">✅ Railway部署成功！</div>
                            <p>请选择要访问的页面：</p>
                            <div class="links">
                                <a href="/">🏠 主页（图片上传工具）</a>
                                <a href="/video-to-gif-offline.html">🎬 视频转GIF工具</a>
                                <a href="/video-to-gif-simple.html">🎥 简化版视频转GIF</a>
                                <a href="/config.html">⚙️ API配置助手</a>
                                <a href="/health">💚 服务器状态检查</a>
                            </div>
                        </div>
                    </body>
                    </html>
                `);
            } else {
                console.error('文件读取错误:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('服务器错误: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Railway 需要监听所有接口
server.listen(PORT, HOST, () => {
    console.log(`🚀 图片上传工具已启动！`);
    console.log(`📱 端口: ${PORT}`);
    console.log(`🌐 主机: ${HOST}`);
    console.log(`🔗 Railway URL: https://your-app.railway.app`);
    console.log(`\n📋 可用页面:`);
    console.log(`   🏠 主页: /`);
    console.log(`   🎬 视频转GIF: /video-to-gif-offline.html`);
    console.log(`   🎥 简化版: /video-to-gif-simple.html`);
    console.log(`   ⚙️ 配置助手: /config.html`);
    console.log(`   💚 健康检查: /health`);
    console.log(`\n✅ 服务器准备就绪！`);
});

// Railway 优雅关闭处理
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

function gracefulShutdown(signal) {
    console.log(`\n👋 收到 ${signal} 信号，正在关闭服务器...`);
    server.close(() => {
        console.log('✅ 服务器已关闭');
        process.exit(0);
    });
    
    // 强制退出超时
    setTimeout(() => {
        console.log('⚠️ 强制退出');
        process.exit(1);
    }, 10000);
}

// 错误处理
process.on('uncaughtException', (err) => {
    console.error('未捕获的异常:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的Promise拒绝:', reason);
    process.exit(1);
});