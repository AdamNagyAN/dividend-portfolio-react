import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from '@tremor/react';
import useTitle from '../../utils/hooks/useTitle';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';
import RegisterForm from './RegisterForm';

interface IRegisterPage {}

const RegisterPage: React.FC<IRegisterPage> = () => {
  const { t } = useTranslation();
  useTitle(t('page-title', { value: t('register.title') }));
  return (
    <>
      <AppBar />
      <section id='register'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center flex-col'>
          <Title>{t('register.title')}</Title>
          <RegisterForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegisterPage;
