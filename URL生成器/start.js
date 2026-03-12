#!/usr/bin/env node

// Railway 启动脚本
console.log('🚀 启动图片上传工具...');
console.log('📍 当前目录:', process.cwd());
console.log('🔧 Node版本:', process.version);
console.log('⚙️ 环境变量 PORT:', process.env.PORT || '未设置');

// 检查必要文件
const fs = require('fs');
const path = require('path');

const requiredFiles = ['app.js', 'index.html', 'package.json'];
const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(__dirname, file)));

if (missingFiles.length > 0) {
    console.error('❌ 缺少必要文件:', missingFiles);
    process.exit(1);
}

console.log('✅ 所有必要文件存在');
console.log('🔄 启动主应用...');

// 启动主应用
require('./app.js');