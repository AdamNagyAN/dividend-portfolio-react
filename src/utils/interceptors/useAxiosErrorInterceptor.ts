import React from 'react';
import axiosBase from 'service/axiosBase';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useSnackbar} from '../../components/molecules/snackbar/SnackbarProvider';
import {ROUTES} from '../../Routes';
import {useAuthContextDispatch} from '../../context/AuthContext';
import {AuthContextActionTypes} from '../../context/AuthReducer';
import ErrorDto from './ErrorDto';

const useAxiosErrorInterceptor = (): void => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAuthContextDispatch();
  const interceptor = React.useCallback(
    (error: any) => {
      if(!error.response.status){
        snackbar({
          title: t('error.title') ?? '',
          message: t('error.general') || '',
          open: true,
        });
        return Promise.reject(error);
      }
      if (error.response?.status === 401) {
        dispatch({
          type: AuthContextActionTypes.LOG_OUT,
        });
        navigate(ROUTES.LOGIN);
      } else {
        const axiosError: ErrorDto = error.response?.data;
        if (axiosError.code === 'OO_DISABLED_USER') {
          navigate(ROUTES.RESEND_TOKEN);
        }
        if (axiosError.code === 'OO_INVALID_ARGUMENT_ERROR') {
          snackbar({
            title: t('error.title') ?? '',
            message: t(`error.${axiosError.code}`) + axiosError.message,
            open: true,
          });
        } else {
          const translatedMessage = axiosError.code
            ? t(`error.${axiosError.code}`)
            : undefined;
          snackbar({
            title: t('error.title') ?? '',
            message: translatedMessage || t('error.general') || '',
            open: true,
          });
        }
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
