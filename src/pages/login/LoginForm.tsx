import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, LoginValues } from './Login.schema';
import TextField from '../../components/atoms/text-field/TextField';
import IconButton from '../../components/molecules/buttons/IconButton';
import HelperText from '../../components/atoms/helper-text/HelperText';
import Link from '../../components/atoms/link/Link';
import { ROUTES } from '../../Routes';
import { AuthContextActionTypes } from '../../context/AuthReducer';
import {
	useAuthContextDispatch,
	useAuthContextState,
} from '../../context/AuthContext';
import useLogin from '../../query/auth/useLogin';

interface ILoginForm {}

const LoginForm: React.FC<ILoginForm> = () => {
	const { t } = useTranslation();
	const { userToken } = useAuthContextState();
	const dispatch = useAuthContextDispatch();
	const { data, isLoading, mutateAsync } = useLogin();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginValues>({
		resolver: yupResolver(loginSchema(t)),
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const onSubmit = async (formValues: LoginValues) => {
		const response = await mutateAsync(formValues);
		localStorage.setItem('internalUserToken', response.data.userToken);
		dispatch({
			type: AuthContextActionTypes.SET_USER_TOKEN,
			value: response.data.userToken,
		});
	};

	// const jwt = React.useMemo(() => {
	// 	return parseJwt(internalUserToken);
	// }, [internalUserToken]);
	//
	// React.useEffect(() => {
	// 	dispatch({
	// 		type: AuthContextActionTypes.SET_USER_DATA,
	// 		value: jwt,
	// 	});
	// }, [jwt]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col gap-6 w-full mt-10 md:mt-0'
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
				className='bg-indigo-600'
			/>
			<HelperText>
				{t('login.dont-have-account')}{' '}
				<Link to={ROUTES.SIGNUP}>{t('login.sign-up')}</Link>
			</HelperText>
		</form>
	);
};

export default LoginForm;
