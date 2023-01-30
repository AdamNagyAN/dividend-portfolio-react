import * as React from 'react';
import { Card } from '@tremor/react';
import tw from 'twin.macro';
import { useParams } from 'react-router-dom';
import useGetDividendPercentage from '../../../query/stock/useGetDividendPercentage';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import TickerDividendPercentageHistoryChart from './TickerDividendPercentageHistoryChart';

const TickerDividendPercentageHistory: React.FC = () => {
  const [range, setRange] = React.useState('5y');
  const { symbol } = useParams<{ symbol: string }>();
  const { data } = useGetDividendPercentage(symbol, range);
  return (
    <Card>
      {data ? (
        <TickerDividendPercentageHistoryChart
          data={data}
          range={range}
          setRange={setRange}
        />
      ) : (
        <div className='flex flex-col items-end'>
          <Skeleton css={[tw`h-8 mb-4 w-64`]} />
          <Skeleton />
        </div>
      )}
    </Card>
  );
};

export default TickerDividendPercentageHistory;
