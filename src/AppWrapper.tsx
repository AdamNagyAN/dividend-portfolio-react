import React from 'react';
import tw from 'twin.macro';
import useAxiosErrorInterceptor from './utils/interceptors/useAxiosErrorInterceptor';
import useYupLocale from './utils/i18n/useYupLocale';
import useUserFromStorage from './utils/hooks/useUserFromStorage';
import useAxiosUserTokenInterceptor from './utils/interceptors/useAxiosUserTokenInterceptor';
import Loader from './components/atoms/loader/Loader';
import useLoadFonts from './utils/hooks/useLoadFonts';

export interface IAppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<IAppWrapperProps> = ({ children }) => {
  useAxiosErrorInterceptor();
  useYupLocale();
  const isStorageParsed = useUserFromStorage();
  const isUserTokenAdded = useAxiosUserTokenInterceptor();
  const isFontLoaded = useLoadFonts();

  if (!isUserTokenAdded || !isStorageParsed || !isFontLoaded)
    return <Loader customCss={tw`h-screen`} />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AppWrapper;
