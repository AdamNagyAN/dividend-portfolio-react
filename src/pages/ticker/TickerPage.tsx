import * as React from 'react';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';
import TickerSummary from './TickerSummary';
import useGetStockSummary from '../../query/dividend/useGetStockSummary';
import Loader from '../../components/atoms/loader/Loader';
import TickerChartToggler from './TickerChartToggler';

const TickerPage: React.FC = () => {
	const { symbol } = useParams<{ symbol: string }>();
	const { data } = useGetStockSummary(symbol);
	return (
		<>
			<AppBar />
			{!data ? (
				<Loader className='mt-24' />
			) : (
				<div className='w-full max-w-screen-xl mx-auto my-4'>
					<TickerSummary data={data} />
					<TickerChartToggler />
				</div>
			)}
			<Footer />
		</>
	);
};

export default TickerPage;
