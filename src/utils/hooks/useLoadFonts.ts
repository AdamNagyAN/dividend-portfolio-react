import React from 'react';
import WebFont from 'webfontloader';

const useLoadFonts = (): boolean => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat'],
      },
      timeout: 2000,
      active() {
        setIsLoaded(true);
      },
      inactive() {
        setIsLoaded(true);
      },
    });
  }, []);

  return isLoaded;
};

export default useLoadFonts;
