import React from 'react';
import useAxiosErrorInterceptor from './utils/interceptors/useAxiosErrorInterceptor';

export interface IAppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper: React.FC<IAppWrapperProps> = ({ children }) => {
	useAxiosErrorInterceptor();
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};

export default AppWrapper;
