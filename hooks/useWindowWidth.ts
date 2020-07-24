import { useState, useEffect } from 'react';

export function useWindowWidth() {
  // global.document 判断是否为client-side
  if (typeof global.document === 'undefined') {
    return {
      windowWidth: 1200
    };
  }
  
  const initialWidth = global.document.body.clientWidth;
  const [windowWidth, setWindowWidth] = useState(initialWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      console.log('设置')
      setWindowWidth(global.document.body.clientWidth);
    }
    window.addEventListener('resize', handleWindowResize, false);

    // 返回清理resize事件的操作
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return {
    windowWidth
  }
}