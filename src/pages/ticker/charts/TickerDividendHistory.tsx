import * as React from 'react';
import { Card } from '@tremor/react';
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import TickerDividendHistoryChart from './TickerDividendHistoryChart';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import useGetDividend from '../../../query/stock/useGetDividend';

const TickerDividendHistory: React.FC = () => {
  const [range, setRange] = React.useState('max');
  const { symbol } = useParams<{ symbol: string }>();
  const { data } = useGetDividend(symbol, range);
  return (
    <Card>
      {data ? (
        <TickerDividendHistoryChart
          data={data}
          setRange={setRange}
          range={range}
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

export default TickerDividendHistory;
