import React from 'react';
import { AxiosRequestConfig } from 'axios';
import HEADERS from '../../service/Headers';
import axiosBase from '../../service/axiosBase';
import sessionStorageUtils from '../storage/SessionStorageUtils';

const getHeader = (token: string, config: AxiosRequestConfig) => {
	return {
		[HEADERS.AUTHORIZATION]: token,
		...config.headers,
	};
};

const useAxiosUserTokenInterceptor = (): boolean => {
	const [isAdded, setIsAdded] = React.useState(false);
	const userToken = sessionStorageUtils.getAuthToken();
	const interceptor = React.useCallback(
		async (config: AxiosRequestConfig) => {
			const configuration = {
				...config,
			};

			if (userToken) {
				configuration.headers = getHeader(`Bearer ${userToken}`, config);
			}
			return configuration;
		},
		[userToken]
	);

	React.useEffect(() => {
		const addedInterceptor = axiosBase.interceptors.request.use(interceptor);
		setIsAdded(true);
		return () => {
			axiosBase.interceptors.request.eject(addedInterceptor);
		};
	}, [interceptor]);
	return isAdded;
};

export default useAxiosUserTokenInterceptor;
