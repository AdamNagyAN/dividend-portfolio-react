import React from 'react';
import useAxiosErrorInterceptor from './utils/interceptors/useAxiosErrorInterceptor';
import useYupLocale from './utils/i18n/useYupLocale';

export interface IAppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper: React.FC<IAppWrapperProps> = ({ children }) => {
	useAxiosErrorInterceptor();
	useYupLocale();
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};

export default AppWrapper;
