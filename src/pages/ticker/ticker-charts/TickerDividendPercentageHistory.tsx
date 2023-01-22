import * as React from 'react';
import { useParams } from 'react-router-dom';
import useGetDividendPercentage from '../../../query/dividend/useGetDividendPercentage';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import TickerDividendPercentageHistoryChart from './TickerDividendPercentageHistoryChart';

const TickerDividendPercentageHistory: React.FC = () => {
	const [range, setRange] = React.useState('5y');
	const { symbol } = useParams<{ symbol: string }>();
	const { data } = useGetDividendPercentage(symbol, range);
	return (
		<div>
			{data ? <TickerDividendPercentageHistoryChart data={data} range={range} setRange={setRange} /> : <Skeleton />}
		</div>
	);
};

export default TickerDividendPercentageHistory;
