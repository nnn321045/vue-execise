import {
  ref
} from 'vue';

window.URL = window.URL || window.webkitURL;

// 本地預覽
function useQueuePreview(fileArray) {
  // 多圖多影片列表
  const previewMap = {};
  // 排序索引
  let idx = 0;
  for (const file of fileArray) {
    const fileData = useImageFilePreview(file);
    previewMap[idx] = fileData;
    idx++;
  };
  return previewMap;
};

// 讀取 Image 資料
function useImageFilePreview(file) {
  return window.URL.createObjectURL(file);
};

export function useFileUpdate() {
  // 預覽用檔案
  const previewMap = ref({});

  // 初始化
  const initData = () => {
    previewMap.value = {};
  };

  //選擇多個網站
  const setFile = async (file = []) => {
    initData();
    previewMap.value = useQueuePreview(file);
  }

  return {
    setFile,
    previewMap
  };
};