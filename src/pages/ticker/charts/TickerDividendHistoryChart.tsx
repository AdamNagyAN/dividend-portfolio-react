import * as React from 'react';
import { AreaChart, Flex } from '@tremor/react';
import tw from 'twin.macro';
import { useTranslation } from 'react-i18next';
import DividendHistoryResponseDto from '../../../service/stock/dto/DividendHistoryResponseDto';
import Tabs from '../../../components/molecules/tabs/Tabs';
import Tab from '../../../components/molecules/tabs/Tab';
import DgrItem from './DgrItem';

// const CustomToggle = styled.div`
// 	${css`
// 		& button {
// 			${tw`bg-white mx-0.5`}
// 		}
// 	`}
// `;

interface ITickerContainerProps {
  data: DividendHistoryResponseDto;
  setRange: (value: string) => void;
  range: string;
}

const TickerDividendHistoryChart: React.FC<ITickerContainerProps> = ({
  data,
  setRange,
  range,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'ticker.charts' });
  const { historicalDividends, validTimeFrames, divGrowthRates } = data;

  const transformedHistoryPayments = historicalDividends.map(it => ({
    Dividend: it.adjDividend,
    date: it.date,
  }));

  const dataFormatter = (number: number) => {
    const formattedNumber = Intl.NumberFormat(undefined, {
      maximumFractionDigits: 2,
    })
      .format(number)
      .toString();
    return `$${formattedNumber}`;
  };

  const handleSelect = (value: string) => {
    setRange(value);
  };

  return (
    <>
      <Flex justifyContent='justify-end'>
        <Tabs
          selectedValue={range}
          handleSelect={handleSelect}
          customCss={tw`bg-gray-100`}
        >
          {validTimeFrames.map((it: string) => (
            <Tab key={it} value={it}>
              {it}
            </Tab>
          ))}
        </Tabs>
      </Flex>
      <AreaChart
        data={transformedHistoryPayments}
        categories={['Dividend']}
        dataKey='date'
        height='h-72'
        colors={['indigo']}
        valueFormatter={dataFormatter}
        marginTop='mt-4'
        autoMinValue
      />
      <div className='flex justify-center items-center mt-4 space-x-4'>
        <DgrItem label={t('dgr1')} value={divGrowthRates.dgr1} />
        <DgrItem label={t('dgr3')} value={divGrowthRates.dgr3} />
        <DgrItem label={t('dgr5')} value={divGrowthRates.dgr5} />
        <DgrItem label={t('dgr10')} value={divGrowthRates.dgr10} />
      </div>
    </>
  );
};

export default TickerDividendHistoryChart;
