import { useEffect } from 'react';
import { debounce } from 'lodash';

export default function useWindow(callback) {
  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      callback(width);
    });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return null;
}
