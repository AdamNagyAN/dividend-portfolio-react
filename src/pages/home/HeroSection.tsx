import * as React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className='py-10'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between min-h-screen'>
        <div className='lg:w-1/3 px-4 mt-20 lg:mt-0'>
          <h1 className='text-center lg:text-left mb-4'>
            {t('home.hero.title')}
          </h1>
          <p className='mb-8'>{t('home.hero.text')}</p>
        </div>
        <div className='lg:w-3/5'>
          <img
            src='https://fastgraphs.com/wp-content/uploads/2022/09/MainImg-2048x1262.png'
            alt='Hero'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
