import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import {yupResolver} from '@hookform/resolvers/yup';
import {useLocation, useNavigate} from 'react-router-dom';
import {loginSchema, LoginValues} from './Login.schema';
import TextField from '../../components/atoms/text-field/TextField';
import IconButton from '../../components/molecules/buttons/IconButton';
import HelperText from '../../components/atoms/helper-text/HelperText';
import Link from '../../components/atoms/link/Link';
import {ROUTES} from '../../Routes';
import {AuthContextActionTypes} from '../../context/AuthReducer';
import {useAuthContextDispatch} from '../../context/AuthContext';
import useLogin from '../../query/auth/useLogin';
import parseJwt from '../../utils/jwt/parseJwt';
import SessionStorageUtils from '../../utils/storage/SessionStorageUtils';

export interface LocationState {
  from: {
    pathname: string;
  };
}

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const dispatch = useAuthContextDispatch();
  const { isLoading, mutateAsync } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (formValues: LoginValues) => {
    if (!executeRecaptcha) return;
    const capchaResponse = await executeRecaptcha();

    const {
      data: { token },
    } = await mutateAsync({
      request: formValues,
      captchaToken: capchaResponse,
    });
    SessionStorageUtils.setAuthToken(token);

    dispatch({
      type: AuthContextActionTypes.SET_STATE,
      userToken: token,
      userData: parseJwt(token),
    });
    const from = (location.state as LocationState)?.from;

    navigate(from || ROUTES.HOME);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' md:max-w-[600px] bg-gray-light rounded-lg p-8 flex flex-col gap-6 w-full mt-10 md:mt-0'
    >
      <Controller
        control={control}
        name='email'
        render={({ field }) => {
          return (
            <TextField
              {...field}
              placeholder={t('login.email') ?? ''}
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
              placeholder={t('login.password') ?? ''}
              value={field.value ?? ''}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <IconButton
        text={t('login.login') ?? ''}
        loading={isLoading}
        disabled={isLoading}
        className='bg-indigo'
      />
      <IconButton
        type='button'
        text={t('login.with-google') ?? ''}
        variant='secondary'
        disabled
      />
      <HelperText>
        {t('login.dont-have-account')}{' '}
        <Link to={ROUTES.REGISTER}>{t('login.sign-up')}</Link>
      </HelperText>
    </form>
  );
};

export default LoginForm;
