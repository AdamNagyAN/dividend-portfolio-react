import * as React from 'react';
import { useParams } from 'react-router-dom';
import TickerDividendHistoryChart from './TickerDividendHistoryChart';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import useGetDividend from '../../../query/stock/useGetDividend';

const TickerDividendHistory: React.FC = () => {
  const [range, setRange] = React.useState('max');
  const { symbol } = useParams<{ symbol: string }>();
  const { data } = useGetDividend(symbol, range);
  return (
    <div>
      {data ? (
        <TickerDividendHistoryChart
          data={data}
          setRange={setRange}
          range={range}
        />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default TickerDividendHistory;
