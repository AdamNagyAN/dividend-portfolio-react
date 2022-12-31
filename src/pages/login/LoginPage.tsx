import * as React from 'react';
import { Title } from '@tremor/react';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
	const { t } = useTranslation();
	return (
		<>
			<AppBar />
			<section id='login'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center min-h-screen flex-col'>
					<Title>{t('login.title')}</Title>
					<LoginForm />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default LoginPage;
