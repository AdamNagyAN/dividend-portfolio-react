import * as React from 'react';
import {Navigate, useNavigate, useSearchParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import useConfirmToken from '../../query/auth/useConfirmToken';
import {ROUTES} from '../../Routes';
import {useSnackbar} from '../../components/molecules/snackbar/SnackbarProvider';

const ConfirmPage: React.FC = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { isError, isSuccess, isLoading } = useConfirmToken(token);

  React.useEffect(() => {
    if (!isLoading) {
      if (isError) {
        navigate(ROUTES.RESEND_TOKEN);
      }
      if (isSuccess) {
        navigate(ROUTES.LOGIN);
        snackbar({
          title: t('confirm.success') as string,
          message: t('confirm.success-message') as string,
          color: 'success',
        });
      }
    }
  }, [isError, isSuccess, isLoading]);

  if (!token) return <Navigate to={ROUTES.HOME} />;
  return null;
};

export default ConfirmPage;
