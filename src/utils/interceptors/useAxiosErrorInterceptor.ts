// import React from 'react';
// import axiosBase from 'service/axiosBase';

// const useAxiosErrorInterceptor = (): void => {
// 	const snackbar = useSnackbar();
// 	const interceptor = React.useCallback(
// 		(error: any) => {
// 			snackbar({
// 				message: 'Hiba történt!',
// 			});
// 			return Promise.reject(error);
// 		},
// 		[snackbar]
// 	);

// 	React.useEffect(() => {
// 		const addedInterceptor = axiosBase.interceptors.response.use(
// 			res => res,
// 			interceptor
// 		);
// 		return () => {
// 			axiosBase.interceptors.response.eject(addedInterceptor);
// 		};
// 	}, [interceptor]);
// };

// export default useAxiosErrorInterceptor;

const test= 'test'

export default  test