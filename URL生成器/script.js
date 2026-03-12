// DOM 元素
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const previewSection = document.getElementById('previewSection');
const previewImage = document.getElementById('previewImage');
const imageUrl = document.getElementById('imageUrl');
const copyBtn = document.getElementById('copyBtn');
const loading = document.getElementById('loading');

// 点击上传按钮
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

// 点击上传区域
uploadArea.addEventListener('click', (e) => {
    if (e.target !== uploadBtn) {
        fileInput.click();
    }
});

// 文件选择
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImageUpload(file);
    }
});

// 拖拽事件
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
    if (file && file.type.startsWith('image/')) {
        handleImageUpload(file);
    } else {
        alert('请上传图片文件！');
    }
});

// 处理图片上传
async function handleImageUpload(file) {
    // 显示加载状态
    loading.style.display = 'block';
    previewSection.style.display = 'none';
    
    // 显示本地预览
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
    
    try {
        // 上传到 ImgBB 图床
        const result = await uploadToCoze(file);
        
        // 显示结果
        loading.style.display = 'none';
        previewSection.style.display = 'block';
        
        // 显示图片直链（推荐使用这个）
        imageUrl.value = result.directUrl;
        
        // 在控制台输出完整信息
        console.log('上传成功:', result);
        console.log('直链（推荐）:', result.directUrl);
        console.log('删除链接:', result.deleteUrl);
        
    } catch (error) {
        loading.style.display = 'none';
        alert('上传失败: ' + error.message + '\n\n请确保已配置 ImgBB API Key');
    }
}

// 上传到 ImgBB 图床（生成永久公网 URL）
async function uploadToCoze(file) {
    try {
        // ImgBB API Key（已配置）
        const IMGBB_API_KEY = '35ba520f460239f6040b2342e05f9ddd';
        
        // 将文件转换为 base64
        const reader = new FileReader();
        const base64Promise = new Promise((resolve, reject) => {
            reader.onload = () => {
                const base64 = reader.result.split(',')[1]; // 移除 data:image/xxx;base64, 前缀
                resolve(base64);
            };
            reader.onerror = reject;
        });
        reader.readAsDataURL(file);
        
        const base64Data = await base64Promise;
        
        // 上传到 ImgBB
        const formData = new FormData();
        formData.append('key', IMGBB_API_KEY);
        formData.append('image', base64Data);
        
        const response = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('上传失败');
        }
        
        const data = await response.json();
        
        if (data.success && data.data) {
            return {
                url: data.data.url,              // 完整页面 URL
                displayUrl: data.data.display_url, // 直接显示 URL
                directUrl: data.data.image.url,   // 直链（推荐使用）
                fileName: file.name,
                bytes: file.size,
                deleteUrl: data.data.delete_url   // 删除链接（保存好，以后可以删除图片）
            };
        } else {
            throw new Error(data.error?.message || '上传失败');
        }
        
    } catch (error) {
        console.error('上传错误:', error);
        throw error;
    }
}

// 复制 URL
copyBtn.addEventListener('click', () => {
    imageUrl.select();
    document.execCommand('copy');
    
    // 显示复制成功提示
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '已复制！';
    copyBtn.style.background = '#4caf50';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = '';
    }, 2000);
});
