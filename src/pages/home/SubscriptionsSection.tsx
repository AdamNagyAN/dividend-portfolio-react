import * as React from 'react';
import {
  PaperAirplaneIcon,
  RocketLaunchIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import Subsciption from './components/Subsciption';

const SubscriptionsSection: React.FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'home.subscriptions',
  });
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto'>
        <h2 className='text-center font-bold mb-8'>{t('title')}</h2>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-10 px-4 md:justify-center md:items-stretch items-center'>
          <Subsciption
            Icon={StarIcon}
            title={t('basic.title')}
            price={t('basic.price')}
            newPrice={t('basic.new-price') as string}
            text={t('basic.text').split('\n') ?? []}
          />
          <Subsciption
            Icon={PaperAirplaneIcon}
            title={t('pro.title')}
            price={t('pro.price')}
            newPrice={t('pro.new-price') as string}
            text={t('pro.text').split('\n') ?? []}
          />
          <Subsciption
            Icon={RocketLaunchIcon}
            title={t('premium.title')}
            price={t('premium.price')}
            newPrice={t('premium.new-price') as string}
            text={t('premium.text').split('\n') ?? []}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsSection;
