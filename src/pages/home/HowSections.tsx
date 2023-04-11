import * as React from 'react';
import { useTranslation } from 'react-i18next';

const HowSections: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home.how' });
  return (
    <section className='py-10 bg-indigo-dark'>
      <div className='container mx-auto text-center'>
        <h2 className='mb-4 text-white'>{t('title')}</h2>
        <p className='mb-8 text-white text-left mx-4'>{t('text')}</p>
      </div>
    </section>
  );
};

export default HowSections;
