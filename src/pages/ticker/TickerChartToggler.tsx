import * as React from 'react';
import tw from 'twin.macro';
import { useTranslation } from 'react-i18next';
import Tabs from '../../components/molecules/tabs/Tabs';
import Tab from '../../components/molecules/tabs/Tab';
import TickerDividendHistory from './charts/TickerDividendHistory';
import TickerDividendPercentageHistory from './charts/TickerDividendPercentageHistory';

interface ITickerChartToggler {}

const TickerChartToggler: React.FC<ITickerChartToggler> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'ticker.charts' });
  const [selectedChart, setSelectedChart] = React.useState<string>('1');

  const handleSelect = (value: string) => {
    setSelectedChart(value);
  };

  return (
    <>
      <Tabs
        selectedValue={selectedChart}
        handleSelect={handleSelect}
        customCss={tw`my-4`}
      >
        <Tab value='1'>{t('dividend-history')}</Tab>
        <Tab value='2'>{t('dividend-percentage-history')}</Tab>
      </Tabs>
      {selectedChart === '1' && <TickerDividendHistory />}
      {selectedChart === '2' && <TickerDividendPercentageHistory />}
    </>
  );
};

export default TickerChartToggler;
