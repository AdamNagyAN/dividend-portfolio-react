import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { Title } from '@tremor/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  changePasswordSchema,
  ChangePasswordValues,
} from './ResetPassword.schema';
import TextField from '../../../components/atoms/text-field/TextField';
import IconButton from '../../../components/molecules/buttons/IconButton';
import useChangePassword from '../../../query/auth/useChangePassword';
import { useSnackbar } from '../../../components/molecules/snackbar/SnackbarProvider';
import { ROUTES } from '../../../Routes';

const NewPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [params] = useSearchParams();
  const token = params.get('token');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordValues>({
    resolver: yupResolver(changePasswordSchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useChangePassword();
  const onSubmit = async (formValues: ChangePasswordValues) => {
    if (!executeRecaptcha) return;
    const capchaResponse = await executeRecaptcha();

    await mutateAsync({
      request: {
        password: formValues.password,
        token: token as string,
      },
      captchaToken: capchaResponse,
    });
    snackbar({
      title: t('reset-password.password-change-success') as string,
      message: t('reset-password.password-change-success-message') as string,
      color: 'success',
      autoHide: false,
    });
    navigate(ROUTES.LOGIN);
  };

  return (
    <section id='resend-token'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap items-center flex-col'>
        <Title>{t('reset-password.title')}</Title>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:w-3/6 md:w-4/6 max-w-md bg-gray-light rounded-lg p-8 flex flex-col gap-6 w-full mt-10 md:mt-0'
        >
          <div className='flex flex-col gap-4 w-full'>
            <Controller
              control={control}
              name='password'
              render={({ field }) => {
                return (
                  <TextField
                    type='password'
                    {...field}
                    placeholder={t('reset-password.password') ?? ''}
                    value={field.value ?? ''}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                );
              }}
            />
            <Controller
              control={control}
              name='password2'
              render={({ field }) => {
                return (
                  <TextField
                    type='password'
                    {...field}
                    placeholder={t('reset-password.confirm-password') ?? ''}
                    value={field.value ?? ''}
                    error={!!errors.password2}
                    helperText={errors.password2?.message}
                  />
                );
              }}
            />
          </div>
          <IconButton
            text={t('reset-password.send') ?? ''}
            loading={isLoading}
            disabled={isLoading}
            className='bg-indigo'
          />
        </form>
      </div>
    </section>
  );
};

export default NewPasswordForm;
