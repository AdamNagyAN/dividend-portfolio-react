import React from 'react';
import axiosBase from 'service/axiosBase';
import { AxiosError } from 'axios';
import { useSnackbar } from '../../components/molecules/snackbar/SnackbarProvider';

const useAxiosErrorInterceptor = (): void => {
	const snackbar = useSnackbar();
	const interceptor = React.useCallback(
		(error: AxiosError) => {
			snackbar({
				title: error.message,
				message: 'Hiba történt!',
				open: true,
			});
			return Promise.reject(error);
		},
		[snackbar]
	);

	React.useEffect(() => {
		const addedInterceptor = axiosBase.interceptors.response.use(
			res => res,
			interceptor
		);
		return () => {
			axiosBase.interceptors.response.eject(addedInterceptor);
		};
	}, [interceptor]);
};

export default useAxiosErrorInterceptor;
