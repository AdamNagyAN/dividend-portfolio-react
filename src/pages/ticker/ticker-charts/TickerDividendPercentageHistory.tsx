import * as React from 'react';
import { useParams } from 'react-router-dom';
import useGetDividendPercentage from '../../../query/dividend/useGetDividendPercentage';
import Skeleton from '../../../components/atoms/skeleton/Skeleton';
import TickerDividendPercentageHistoryChart from './TickerDividendPercentageHistoryChart';

const TickerDividendPercentageHistory: React.FC = () => {
	const [range] = React.useState('5y');
	const { symbol } = useParams<{ symbol: string }>();
	const { data } = useGetDividendPercentage(symbol, range);
	return (
		<div>
			{data ? <TickerDividendPercentageHistoryChart data={data} /> : <Skeleton />}
		</div>
	);
};

export default TickerDividendPercentageHistory;
