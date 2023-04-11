import * as React from 'react';
import {
  ChartBarIcon,
  CircleStackIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import Feature from './components/Feature';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto text-center h-auto'>
        <h2 className='mb-8'>{t('home.features.title')}</h2>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-10 px-4 justify-center items-center h-full'>
          <Feature
            Icon={CircleStackIcon}
            title={t('home.features.db-title')}
            text={t('home.features.db-text')}
          />
          <Feature
            Icon={ChartBarIcon}
            title={t('home.features.tools-title')}
            text={t('home.features.tools-text')}
          />
          <Feature
            Icon={MegaphoneIcon}
            title={t('home.features.forum-title')}
            text={t('home.features.forum-text')}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
