import React from 'react';

const useScrollToTop = () => {
  return React.useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
