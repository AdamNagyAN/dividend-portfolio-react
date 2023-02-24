import React from 'react';

const useDisableBodyScroll = (disable: boolean) => {
  React.useEffect(() => {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [disable]);
};

export default useDisableBodyScroll;
