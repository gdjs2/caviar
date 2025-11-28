// scripts/generate-gallery.js

const fs = require('fs');
const path = require('path');
// 👇 1. 引入 image-size 库
const { imageSize } = require('image-size')

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

  console.log('🔍 开始扫描图片尺寸...');

  // 2. 遍历文件，寻找配对
  files.forEach(file => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);

    // 如果是图片文件
    if (IMAGE_EXTS.includes(ext)) {
      // 检查是否存在对应的视频文件
      // 稍微优化了一下查找逻辑，处理 .mov 和 .MOV 大小写问题
      const videoFile = files.find(f => 
        f === name + '.mov' || f === name + '.MOV'
      );

      if (videoFile) {
        // 👇 2. 获取图片宽高
        const buffer = fs.readFileSync(path.join(IMAGES_DIR, file));
        const dimensions = imageSize(buffer);

        console.log(`✅ 发现 Live Photo: ${name} (宽: ${dimensions.width}, 高: ${dimensions.height})`);

        // 3. 添加到列表
        galleryItems.push({
          id: name,
          image: file,
          video: videoFile,
          // 👇 保存宽高数据
          width: dimensions.width,
          height: dimensions.height,
          // 预计算宽高比 (例如 0.75)，保留 4 位小数
          aspectRatio: dimensions.height ? Number((dimensions.width / dimensions.height).toFixed(4)) : 0
        });
      }
    }
  });

  // 4. 写入 JSON
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