// src/hooks/useMasonry.js

import { useState, useEffect } from 'react';

/**
 * 这是一个简单的 Hook，用于将一个数组的项目平均分配到 N 个列中。
 * 真正的瀑布流需要测量项目高度，但对于 LivePhoto 这种高度相对可预测的，
 * 简单的平均分配通常能提供比 column-count 更好的对齐。
 * * @param {Array} items - 要布局的项目数组 (例如 photoList)
 * @param {number} columnCount - 要显示的列数
 * @returns {Array<Array>} - 一个包含 N 个数组的数组，每个内部数组代表一列的内容
 */
const useMasonry = (items, columnCount) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (!items || items.length === 0) {
      setColumns(Array(columnCount).fill([]));
      return;
    }

    // 1. 初始化列数组
    const newColumns = Array.from({ length: columnCount }, () => []);

    // 2. 循环项目，依次将它们分配给每一列
    // 这种简单的轮流分配法 (Round-Robin) 在 items 高度接近时效果最好。
    items.forEach((item, index) => {
      // 这里的分配逻辑非常简单：item 0 -> Col 0, item 1 -> Col 1, item 2 -> Col 2, item 3 -> Col 0...
      const columnIndex = index % columnCount;
      newColumns[columnIndex].push(item);
    });

    setColumns(newColumns);
  }, [items, columnCount]);

  return columns;
};

export default useMasonry;