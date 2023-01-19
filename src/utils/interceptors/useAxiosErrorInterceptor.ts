import React from 'react';
import axiosBase from 'service/axiosBase';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../../components/molecules/snackbar/SnackbarProvider';
import { ROUTES } from '../../Routes';
import { useAuthContextDispatch } from '../../context/AuthContext';
import { AuthContextActionTypes } from '../../context/AuthReducer';

const useAxiosErrorInterceptor = (): void => {
	const snackbar = useSnackbar();
	const navigate = useNavigate();
	const dispatch = useAuthContextDispatch();
	const interceptor = React.useCallback(
		(error: AxiosError) => {
			if (error.response?.status === 401) {
				dispatch({
					type: AuthContextActionTypes.LOG_OUT,
				});
				navigate(ROUTES.LOGIN);
			} else {
				snackbar({
					title: error.message,
					message: 'Hiba történt!',
					open: true,
				});
			}
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
