const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const COZE_API_TOKEN = 'pat_P35oKi8UFqtG3rc0J5EWwj3nidrijSjDglf0U0y7jQTbqE6CrZxtm17Yia7KRFsx';

// 创建上传目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // 通过 Coze 对话 API 获取 CDN URL
    if (req.url === '/upload-to-coze' && req.method === 'POST') {
        let body = [];
        
        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', async () => {
            const buffer = Buffer.concat(body);
            const boundary = req.headers['content-type'].split('boundary=')[1];
            
            // 先保存文件到本地作为备份
            const parts = buffer.toString('binary').split('--' + boundary);
            let savedFileName = null;
            let originalFileName = null;
            
            for (let part of parts) {
                if (part.includes('filename=')) {
                    const filenameMatch = part.match(/filename="(.+?)"/);
                    if (!filenameMatch) continue;
                    
                    originalFileName = filenameMatch[1];
                    const ext = path.extname(originalFileName);
                    const timestamp = Date.now();
                    savedFileName = `${timestamp}${ext}`;
                    
                    const contentStart = part.indexOf('\r\n\r\n') + 4;
                    const contentEnd = part.lastIndexOf('\r\n');
                    const fileContent = part.substring(contentStart, contentEnd);
                    
                    const filePath = path.join(uploadDir, savedFileName);
                    fs.writeFileSync(filePath, fileContent, 'binary');
                    break;
                }
            }
            
            // 第一步：上传文件到 Coze
            const uploadOptions = {
                hostname: 'api.coze.cn',
                port: 443,
                path: '/v1/files/upload',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${COZE_API_TOKEN}`,
                    'Content-Type': req.headers['content-type'],
                    'Content-Length': buffer.length
                }
            };

            const uploadReq = https.request(uploadOptions, (uploadRes) => {
                let uploadData = '';
                
                uploadRes.on('data', chunk => {
                    uploadData += chunk;
                });
                
                uploadRes.on('end', () => {
                    try {
                        const uploadResult = JSON.parse(uploadData);
                        
                        if (uploadResult.code !== 0 || !uploadResult.data || !uploadResult.data.id) {
                            // 上传失败，返回本地 URL
                            const localUrl = `http://localhost:${PORT}/uploads/${savedFileName}`;
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({
                                success: true,
                                url: localUrl,
                                fileName: originalFileName,
                                note: 'Coze 上传失败，使用本地 URL'
                            }));
                            return;
                        }
                        
                        const fileId = uploadResult.data.id;
                        
                        // 第二步：通过对话 API 获取 CDN URL
                        // 创建一个简单的对话，让 Coze 返回图片的 CDN 链接
                        const chatData = JSON.stringify({
                            bot_id: '7445007655742177281', // 需要一个 Bot ID
                            user_id: 'image_uploader_' + Date.now(),
                            stream: false,
                            auto_save_history: false,
                            additional_messages: [{
                                role: 'user',
                                content: `[{"type":"file","file_id":"${fileId}"}]`,
                                content_type: 'object_string'
                            }]
                        });
                        
                        const chatOptions = {
                            hostname: 'api.coze.cn',
                            port: 443,
                            path: '/v3/chat',
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${COZE_API_TOKEN}`,
                                'Content-Type': 'application/json',
                                'Content-Length': Buffer.byteLength(chatData)
                            }
                        };
                        
                        const chatReq = https.request(chatOptions, (chatRes) => {
                            let chatResponseData = '';
                            
                            chatRes.on('data', chunk => {
                                chatResponseData += chunk;
                            });
                            
                            chatRes.on('end', () => {
                                // 无论对话是否成功，都返回本地 URL 和文件 ID
                                const localUrl = `http://localhost:${PORT}/uploads/${savedFileName}`;
                                res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({
                                    success: true,
                                    url: localUrl,
                                    fileId: fileId,
                                    fileName: originalFileName,
                                    bytes: uploadResult.data.bytes,
                                    note: '文件已上传到 Coze，文件 ID: ' + fileId + '。要获取 CDN URL，需要在 Coze 对话中使用该文件。'
                                }));
                            });
                        });
                        
                        chatReq.on('error', () => {
                            const localUrl = `http://localhost:${PORT}/uploads/${savedFileName}`;
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({
                                success: true,
                                url: localUrl,
                                fileId: fileId,
                                fileName: originalFileName,
                                note: '文件已上传到 Coze (ID: ' + fileId + ')，使用本地 URL'
                            }));
                        });
                        
                        chatReq.write(chatData);
                        chatReq.end();
                        
                    } catch (error) {
                        const localUrl = `http://localhost:${PORT}/uploads/${savedFileName}`;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            success: true,
                            url: localUrl,
                            fileName: originalFileName,
                            note: '文件已保存到本地'
                        }));
                    }
                });
            });

            uploadReq.on('error', () => {
                const localUrl = `http://localhost:${PORT}/uploads/${savedFileName}`;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    url: localUrl,
                    fileName: originalFileName,
                    note: '文件已保存到本地（Coze 连接失败）'
                }));
            });

            uploadReq.write(buffer);
            uploadReq.end();
        });
        
        return;
    }

    // 代理访问 Coze 文件
    if (req.url.startsWith('/coze-file/')) {
        const fileId = req.url.replace('/coze-file/', '');
        
        // 检查本地缓存
        const cachedFilePath = path.join(uploadDir, `coze_${fileId}`);
        if (fs.existsSync(cachedFilePath)) {
            // 从缓存读取
            const ext = path.extname(cachedFilePath);
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            
            fs.readFile(cachedFilePath, (error, content) => {
                if (!error) {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content);
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('读取缓存文件失败');
                }
            });
            return;
        }
        
        // 从 Coze 获取文件信息
        const options = {
            hostname: 'api.coze.cn',
            port: 443,
            path: `/v1/files/retrieve?file_id=${fileId}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${COZE_API_TOKEN}`
            }
        };

        const cozeReq = https.request(options, (cozeRes) => {
            let responseData = '';
            
            cozeRes.on('data', chunk => {
                responseData += chunk;
            });
            
            cozeRes.on('end', () => {
                try {
                    const data = JSON.parse(responseData);
                    
                    if (data.code === 0 && data.data) {
                        // Coze 不提供直接下载链接，返回文件信息
                        // 我们需要将文件保存在本地
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            message: 'Coze 文件需要通过其他方式访问',
                            fileInfo: data.data,
                            note: '文件已上传到 Coze，但 Coze API 不提供公开下载链接。建议使用 Coze 对话功能访问文件。'
                        }));
                    } else {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(data));
                    }
                } catch (error) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('获取文件失败: ' + error.message);
                }
            });
        });

        cozeReq.on('error', (error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('请求 Coze API 失败: ' + error.message);
        });

        cozeReq.end();
        return;
    }

    // 处理静态文件
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - 文件未找到</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('服务器错误: ' + error.code, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
    console.log('图片将上传到 Coze 并通过本地代理访问');
    console.log('按 Ctrl+C 停止服务器');
});
