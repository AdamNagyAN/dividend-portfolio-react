import React from 'react';
import useAxiosErrorInterceptor from './utils/interceptors/useAxiosErrorInterceptor';
import useYupLocale from './utils/i18n/useYupLocale';
import useUserFromStorage from './utils/hooks/useUserFromStorage';
import useAxiosUserTokenInterceptor from './utils/interceptors/useAxiosUserTokenInterceptor';

export interface IAppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper: React.FC<IAppWrapperProps> = ({ children }) => {
	useAxiosErrorInterceptor();
	useYupLocale();
	const isStorageParsed = useUserFromStorage();
	const isUserTokenAdded = useAxiosUserTokenInterceptor();
	if (!isUserTokenAdded || !isStorageParsed) return null;
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};

export default AppWrapper;
