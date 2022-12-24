import * as React from 'react';
import { useParams } from 'react-router-dom';
import useGetDividend from '../../query/dividend/useGetDividend';
import AppBar from '../../components/organisms/appbar/AppBar';
import TickerContainer from './TickerContainer';
import 'styled-components/macro';
import Footer from '../../components/organisms/footer/Footer';

const TickerPage: React.FC = () => {
	const [range, setRange] = React.useState('max');
	const { symbol } = useParams<{ symbol: string }>();
	const { data } = useGetDividend(symbol, range);
	return (
		<>
			<AppBar />
			<div className='p-4 min-h-screen'>
				{data ? (
					<TickerContainer data={data} setRange={setRange} range={range} />
				) : (
					<div
						role='status'
						className='p-4 w-full rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-200'
					>
						<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-6' />
						<div className='w-full h-72 bg-gray-200 rounded-sm dark:bg-gray-300' />
						<span className='sr-only'>Loading...</span>
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default TickerPage;
