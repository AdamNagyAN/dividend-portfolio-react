import * as React from 'react';
import { Title } from '@tremor/react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useNavigate } from 'react-router-dom';
import {
  resetPasswordSchema,
  ResetPasswordValues,
} from './ResetPassword.schema';
import TextField from '../../../components/atoms/text-field/TextField';
import IconButton from '../../../components/molecules/buttons/IconButton';
import useSendResetPasswordEmail from '../../../query/auth/useSendResetPasswordEmail';
import { useSnackbar } from '../../../components/molecules/snackbar/SnackbarProvider';
import { ROUTES } from '../../../Routes';

const ResendPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: yupResolver(resetPasswordSchema(t)),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { mutateAsync, isLoading } = useSendResetPasswordEmail();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const onSubmit = async (formValues: ResetPasswordValues) => {
    if (!executeRecaptcha) return;
    const capchaResponse = await executeRecaptcha();

    await mutateAsync({
      request: formValues,
      captchaToken: capchaResponse,
    });
    snackbar({
      title: t('reset-password.email-sending-success') as string,
      message: t('reset-password.email-sending-success-message') as string,
      color: 'success',
      autoHide: false,
    });
    navigate(ROUTES.HOME);
  };

  return (
    <section id='resend-token'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap items-center flex-col'>
        <Title>{t('reset-password.title')}</Title>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:w-3/6 md:w-4/6 max-w-md bg-gray-light rounded-lg p-8 flex flex-col gap-6 w-full mt-10 md:mt-0'
        >
          <div className='flex space-x-4 w-full'>
            <Controller
              control={control}
              name='email'
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    placeholder={t('reset-password.email') ?? ''}
                    value={field.value ?? ''}
                    error={!!errors.email}
                    helperText={errors.email?.message}
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

export default ResendPasswordForm;
