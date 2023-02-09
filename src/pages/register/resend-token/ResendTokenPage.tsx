import * as React from 'react';
import { Title } from '@tremor/react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import AppBar from '../../../components/organisms/appbar/AppBar';
import Footer from '../../../components/organisms/footer/Footer';
import { resendTokenSchema, ResendTokenValues } from './ResendToken.schema';
import TextField from '../../../components/atoms/text-field/TextField';
import IconButton from '../../../components/molecules/buttons/IconButton';
import { useSnackbar } from '../../../components/molecules/snackbar/SnackbarProvider';
import useResendEmail from '../../../query/auth/useResendEmail';

const ResendTokenPage: React.FC = () => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();
  const { isLoading, mutateAsync } = useResendEmail();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResendTokenValues>({
    resolver: yupResolver(resendTokenSchema(t)),
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (formValues: ResendTokenValues) => {
    await mutateAsync({ email: formValues.email });
    snackbar({
      title: t('resend-token.success') ?? '',
      message: t('resend-token.success-message') ?? '',
      color: 'success',
    });
  };

  return (
    <>
      <AppBar />
      <section id='resend-token'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center flex-col'>
          <Title>{t('resend-token.title')}</Title>
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
                      placeholder={t('resend-token.email') ?? ''}
                      value={field.value ?? ''}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  );
                }}
              />
            </div>
            <IconButton
              text={t('resend-token.resend') ?? ''}
              loading={isLoading}
              disabled={isLoading}
              className='bg-indigo'
            />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResendTokenPage;
