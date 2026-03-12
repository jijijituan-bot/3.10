@echo off
echo ========================================
echo 图片上传网站 - 本地服务器启动
echo ========================================
echo.
echo 正在检查 Python...
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo 使用 Python 启动服务器...
    echo 访问地址: http://localhost:8080
    echo 按 Ctrl+C 停止服务器
    echo.
    python -m http.server 8080
) else (
    echo Python 未安装，尝试使用 Node.js...
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo 正在安装 http-server...
        npm install -g http-server
        echo 使用 http-server 启动服务器...
        echo 访问地址: http://localhost:8080
        echo 按 Ctrl+C 停止服务器
        echo.
        http-server -p 8080
    ) else (
        echo.
        echo 错误：未找到 Python 或 Node.js
        echo 请安装其中之一后再运行此脚本
        echo.
        echo 或者直接双击打开 index.html 文件
        pause
    )
)
