// scripts/generate-gallery.js

const fs = require('fs');
const path = require('path');

// 配置路径
const IMAGES_DIR = path.join(__dirname, '../public/images/gallery');
const OUTPUT_FILE = path.join(__dirname, '../src/data/photos.json');

// 支持的扩展名
const IMAGE_EXTS = ['.jpg', '.jpeg', '.JPG', '.JPEG'];
const VIDEO_EXTS = ['.mov', '.MOV'];

try {
  // 1. 读取目录
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ 错误：找不到目录 ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const galleryItems = [];

  // 2. 遍历文件，寻找配对
  files.forEach(file => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);

    // 如果是图片文件
    if (IMAGE_EXTS.includes(ext)) {
      // 检查是否存在对应的视频文件
      const hasVideo = VIDEO_EXTS.some(videoExt => 
        files.includes(name + videoExt)
      );

      if (hasVideo) {
        // 找到一对！添加到列表
        // 注意：这里我们存文件名，不存完整路径，路径在 React 里拼
        galleryItems.push({
          id: name,
          image: file,
          video: name + (files.find(f => f === name + '.mov' || f === name + '.MOV') ? path.extname(files.find(f => f === name + '.mov' || f === name + '.MOV')) : '.mov')
        });
      }
    }
  });

  // 3. 写入 JSON
  // 确保输出目录存在
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(galleryItems, null, 2));
  
  console.log(`✅ 扫描完成！共发现 ${galleryItems.length} 组 Live Photo。`);
  console.log(`📄 数据已保存到: ${OUTPUT_FILE}`);

} catch (err) {
  console.error('❌ 生成失败:', err);
}