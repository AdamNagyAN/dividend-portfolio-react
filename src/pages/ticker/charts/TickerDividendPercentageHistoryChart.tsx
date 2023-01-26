import * as React from 'react';
import { AreaChart, Card, Flex } from '@tremor/react';
import tw from 'twin.macro';
import DividendPercentageHistoryResponseDto from '../../../service/stock/dto/DividendPercentageHistoryResponseDto';
import Tabs from '../../../components/molecules/tabs/Tabs';
import Tab from '../../../components/molecules/tabs/Tab';

interface ITickerDividendPercentageHistoryChart {
  data: DividendPercentageHistoryResponseDto;
  range: string;
  setRange: (value: string) => void;
}

const TickerDividendPercentageHistoryChart: React.FC<
  ITickerDividendPercentageHistoryChart
> = ({ data, range, setRange }) => {
  const {
    historicalDividendPercentages,
    averageDividendPercentage,
    validTimeFrames,
  } = data;

  const transformedHistoryPayments = historicalDividendPercentages.map(it => ({
    'Dividend Percentage': it.dividendPercentage,
    Average: averageDividendPercentage,
    date: it.date,
  }));

  const dataFormatter = (number: number) => {
    const formattedNumber = Intl.NumberFormat(undefined, {
      maximumFractionDigits: 2,
    })
      .format(number)
      .toString();
    return `${formattedNumber}%`;
  };

  const handleSelect = (value: string) => {
    setRange(value);
  };

  return (
    <div>
      <Card>
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
          categories={['Dividend Percentage', 'Average']}
          dataKey='date'
          height='h-72'
          colors={['indigo', 'cyan']}
          marginTop='mt-4'
          autoMinValue
          showXAxis={false}
          valueFormatter={dataFormatter}
        />
      </Card>
    </div>
  );
};

export default TickerDividendPercentageHistoryChart;
