import * as React from 'react';
import { useParams } from 'react-router-dom';
import useGetDividend from '../../query/dividend/useGetDividend';
import AppBar from '../../components/organisms/AppBar/AppBar';
import TickerContainer from './TickerContainer';

const TickerPage: React.FC = () => {
	const [range, setRange] = React.useState('max');
	const { symbol } = useParams<{ symbol: string }>();
	const { data } = useGetDividend(symbol, range);
	return (
		<>
			<AppBar />
			{data && <TickerContainer data={data} setRange={setRange} range={range} />}
		</>
	);
};

export default TickerPage;
