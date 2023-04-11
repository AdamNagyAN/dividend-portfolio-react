import * as React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';
import useTitle from '../../utils/hooks/useTitle';
import SubscriptionsSection from './SubscriptionsSection';
import HowSections from './HowSections';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';

const HomePage: React.FC = () => {
  const { t } = useTranslation('translation');
  useTitle(t('page-title', { value: t('home.title'), ns: 'translation' }));

  return (
    <>
      <AppBar absolute />
      <HeroSection />
      <FeaturesSection />
      <HowSections />
      <SubscriptionsSection />
      <Footer />
    </>
  );
};

export default HomePage;
