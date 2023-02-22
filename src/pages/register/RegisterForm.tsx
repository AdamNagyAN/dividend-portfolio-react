import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import TextField from "../../components/atoms/text-field/TextField";
import IconButton from "../../components/molecules/buttons/IconButton";
import HelperText from "../../components/atoms/helper-text/HelperText";
import Link from "../../components/atoms/link/Link";
import { ROUTES } from "../../Routes";
import { registerSchema, RegisterValues } from "./Register.schema";
import useRegister from "../../query/auth/useRegister";
import { useSnackbar } from "../../components/molecules/snackbar/SnackbarProvider";
import useTitle from "../../utils/hooks/useTitle";

interface IRegisterForm {}

const RegisterForm: React.FC<IRegisterForm> = () => {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  useTitle(t('page-title', { value: t('resend-token.title') }));
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { mutateAsync, isLoading } = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(registerSchema(t)),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (formValues: RegisterValues) => {
    if (!executeRecaptcha) return;
    const recaptchaResponse = await executeRecaptcha();
    await mutateAsync({
      request: {
        email: formValues.email,
        password: formValues.password,
        firstname: formValues.firstname,
        lastname: formValues.lastname,
      },
      captchaToken: recaptchaResponse,
    });
    navigate(ROUTES.LOGIN);
    snackbar({
      title: t('register.success') as string,
      message: t('register.success-message') as string,
      color: 'success',
      autoHide: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='lg:w-3/6 md:w-4/6 max-w-xl bg-gray-light rounded-lg p-8 flex flex-col gap-6 w-full mt-10 md:mt-0'
    >
      <div className='flex flex-col md:flex-row gap-6 md:gap-0 md:space-x-4 w-full'>
        <Controller
          control={control}
          name='firstname'
          render={({ field }) => {
            return (
              <TextField
                {...field}
                placeholder={t('register.firstname') ?? ''}
                value={field.value ?? ''}
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
              />
            );
          }}
        />
        <Controller
          control={control}
          name='lastname'
          render={({ field }) => {
            return (
              <TextField
                {...field}
                placeholder={t('register.lastname') ?? ''}
                value={field.value ?? ''}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
            );
          }}
        />
      </div>
      <Controller
        control={control}
        name='email'
        render={({ field }) => {
          return (
            <TextField
              {...field}
              placeholder={t('register.email') ?? ''}
              value={field.value ?? ''}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          );
        }}
      />
      <Controller
        control={control}
        name='password'
        render={({ field }) => {
          return (
            <TextField
              {...field}
              type='password'
              placeholder={t('register.password') ?? ''}
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
              {...field}
              type='password'
              placeholder={t('register.confirm-password') ?? ''}
              value={field.value ?? ''}
              error={!!errors.password2}
              helperText={errors.password2?.message}
            />
          );
        }}
      />
      <IconButton
        text={t('register.register') ?? ''}
        loading={isLoading}
        disabled={isLoading}
        className='bg-indigo'
      />
      <HelperText>
        {t('register.already-have-account')}{' '}
        <Link to={ROUTES.LOGIN}>{t('register.login')}</Link>
      </HelperText>
    </form>
  );
};

export default RegisterForm;
