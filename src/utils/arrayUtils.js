// src/utils/arrayUtils.js

/**
 * 使用 Fisher-Yates (Knuth) 算法对数组进行原地洗牌 (Shuffle)。
 * @param {Array<T>} array - 要打乱的数组
 * @returns {Array<T>} - 打乱后的数组
 */
export const shuffleArray = (array) => {
  // 创建一个浅拷贝，以确保我们不会修改原始的 photoList 导入
  const newArray = [...array];
  let currentIndex = newArray.length, randomIndex;

  // 当还剩下元素可以洗牌时...
  while (currentIndex !== 0) {
    // 随机选择一个剩余的元素...
    // Math.floor(Math.random() * currentIndex) 返回一个 [0, currentIndex - 1] 的随机整数
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; // 索引往前移一位

    // 并将其与当前元素交换
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]
    ];
  }

  return newArray;
};