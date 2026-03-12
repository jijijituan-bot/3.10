// DOM 元素
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const videoSection = document.getElementById('videoSection');
const videoPreview = document.getElementById('videoPreview');
const loading = document.getElementById('loading');
const loadingText = document.getElementById('loadingText');
const resultSection = document.getElementById('resultSection');
const gifPreview = document.getElementById('gifPreview');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');

// 控制元素
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const widthInput = document.getElementById('width');
const fpsInput = document.getElementById('fps');
const startTimeDisplay = document.getElementById('startTimeDisplay');
const endTimeDisplay = document.getElementById('endTimeDisplay');
const convertBtn = document.getElementById('convertBtn');
const downloadBtn = document.getElementById('downloadBtn');
const uploadGifBtn = document.getElementById('uploadGifBtn');
const copyBtn = document.getElementById('copyBtn');
const imageUrl = document.getElementById('imageUrl');
const urlSection = document.getElementById('urlSection');

let currentVideoFile = null;
let generatedGifBlob = null;

// 点击上传
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

uploadArea.addEventListener('click', (e) => {
    if (e.target !== uploadBtn) {
        fileInput.click();
    }
});

// 文件选择
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
        handleVideoUpload(file);
    } else {
        alert('请选择视频文件！');
    }
});

// 拖拽上传
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
        handleVideoUpload(file);
    } else {
        alert('请上传视频文件！');
    }
});

// 处理视频上传
function handleVideoUpload(file) {
    currentVideoFile = file;
    const url = URL.createObjectURL(file);
    videoPreview.src = url;
    
    videoPreview.onloadedmetadata = () => {
        const duration = videoPreview.duration;
        startTimeInput.max = duration;
        endTimeInput.max = duration;
        endTimeInput.value = Math.min(3, duration);
        updateTimeDisplays();
        
        uploadArea.style.display = 'none';
        videoSection.style.display = 'block';
        resultSection.style.display = 'none';
    };
}

// 更新时间显示
function updateTimeDisplays() {
    startTimeDisplay.textContent = startTimeInput.value + 's';
    endTimeDisplay.textContent = endTimeInput.value + 's';
}

startTimeInput.addEventListener('input', updateTimeDisplays);
endTimeInput.addEventListener('input', updateTimeDisplays);

// 转换为GIF
convertBtn.addEventListener('click', async () => {
    const startTime = parseFloat(startTimeInput.value);
    const endTime = parseFloat(endTimeInput.value);
    const width = parseInt(widthInput.value);
    const fps = parseInt(fpsInput.value);
    
    if (endTime <= startTime) {
        alert('结束时间必须大于开始时间！');
        return;
    }
    
    if (endTime - startTime > 10) {
        alert('时长不能超过10秒！建议2-5秒以获得更好的效果。');
        return;
    }
    
    videoSection.style.display = 'none';
    loading.style.display = 'block';
    loadingText.textContent = '正在加载转换工具...';
    progressBar.style.display = 'block';
    progressFill.style.width = '0%';
    
    try {
        await convertVideoToGif(currentVideoFile, startTime, endTime, width, fps);
    } catch (error) {
        console.error('转换失败:', error);
        alert('转换失败: ' + error.message);
        videoSection.style.display = 'block';
        loading.style.display = 'none';
        progressBar.style.display = 'none';
    }
});

// 使用 FFmpeg.wasm 转换视频为GIF
async function convertVideoToGif(file, startTime, endTime, width, fps) {
    loadingText.textContent = '正在加载 FFmpeg...';
    progressFill.style.width = '10%';
    
    try {
        // 动态加载 FFmpeg.wasm（使用 jsdelivr CDN，更稳定）
        if (!window.FFmpegWASM) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/umd/ffmpeg.js';
            document.head.appendChild(script);
            
            await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = () => reject(new Error('FFmpeg 加载失败，请检查网络连接'));
            });
        }
        
        loadingText.textContent = '正在初始化...';
        progressFill.style.width = '20%';
        
        const { FFmpeg } = window.FFmpegWASM;
        const ffmpeg = new FFmpeg();
        
        ffmpeg.on('log', ({ message }) => {
            console.log(message);
        });
        
        ffmpeg.on('progress', ({ progress }) => {
            const percent = Math.round(progress * 60) + 30;
            progressFill.style.width = percent + '%';
            loadingText.textContent = `正在转换... ${percent}%`;
        });
        
        loadingText.textContent = '正在加载核心文件...';
        
        // 使用 jsdelivr CDN 加载核心文件
        await ffmpeg.load({
            coreURL: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js',
            wasmURL: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm',
        });
        
        progressFill.style.width = '30%';
        loadingText.textContent = '正在读取视频...';
        
        // 读取视频文件
        const videoData = await file.arrayBuffer();
        await ffmpeg.writeFile('input.mp4', new Uint8Array(videoData));
        
        progressFill.style.width = '40%';
        loadingText.textContent = '正在转换为GIF...';
        
        // 转换命令
        const duration = endTime - startTime;
        await ffmpeg.exec([
            '-i', 'input.mp4',
            '-ss', startTime.toString(),
            '-t', duration.toString(),
            '-vf', `fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
            '-loop', '0',
            'output.gif'
        ]);
        
        progressFill.style.width = '90%';
        loadingText.textContent = '正在生成文件...';
        
        // 读取生成的GIF
        const data = await ffmpeg.readFile('output.gif');
        const blob = new Blob([data.buffer], { type: 'image/gif' });
        generatedGifBlob = blob;
        
        // 显示预览
        const url = URL.createObjectURL(blob);
        gifPreview.src = url;
        
        progressFill.style.width = '100%';
        loadingText.textContent = '转换完成！';
        
        setTimeout(() => {
            loading.style.display = 'none';
            progressBar.style.display = 'none';
            resultSection.style.display = 'block';
        }, 500);
        
    } catch (error) {
        console.error('转换错误:', error);
        throw new Error('转换失败: ' + error.message + '\n\n可能原因：\n1. 网络连接问题\n2. 浏览器不支持\n3. 视频文件损坏');
    }
}

// 下载GIF
downloadBtn.addEventListener('click', () => {
    if (!generatedGifBlob) return;
    
    const url = URL.createObjectURL(generatedGifBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gif-${Date.now()}.gif`;
    a.click();
    URL.revokeObjectURL(url);
});

// 上传到图床
uploadGifBtn.addEventListener('click', async () => {
    if (!generatedGifBlob) return;
    
    uploadGifBtn.disabled = true;
    uploadGifBtn.textContent = '上传中...';
    
    try {
        const IMGBB_API_KEY = '35ba520f460239f6040b2342e05f9ddd';
        
        // 转换为 base64
        const reader = new FileReader();
        const base64Promise = new Promise((resolve, reject) => {
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = reject;
        });
        reader.readAsDataURL(generatedGifBlob);
        
        const base64Data = await base64Promise;
        
        // 上传到 ImgBB
        const formData = new FormData();
        formData.append('key', IMGBB_API_KEY);
        formData.append('image', base64Data);
        
        const response = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success && data.data) {
            imageUrl.value = data.data.image.url;
            urlSection.style.display = 'block';
            uploadGifBtn.textContent = '✅ 上传成功';
            uploadGifBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
        } else {
            throw new Error('上传失败');
        }
    } catch (error) {
        alert('上传失败: ' + error.message);
        uploadGifBtn.disabled = false;
        uploadGifBtn.textContent = '☁️ 上传到图床';
    }
});

// 复制链接
copyBtn.addEventListener('click', () => {
    imageUrl.select();
    document.execCommand('copy');
    
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '已复制！';
    copyBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = '';
    }, 2000);
});