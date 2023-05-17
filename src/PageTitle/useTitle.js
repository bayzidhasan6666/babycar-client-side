import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Baby Car | ${title} `;
  }, [title]);
};

export default useTitle;
