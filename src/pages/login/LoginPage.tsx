import * as React from 'react';
import { Title } from '@tremor/react';
import { useTranslation } from 'react-i18next';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';
import LoginForm from './LoginForm';
import useTitle from '../../utils/hooks/useTitle';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  useTitle(t('page-title', { value: t('login.title') }));
  return (
    <>
      <AppBar />
      <section id='login'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center flex-col'>
          <Title>{t('login.title')}</Title>
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
