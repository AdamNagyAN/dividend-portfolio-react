import * as React from 'react';
import { AreaChart, Card } from '@tremor/react';
import DividendPercentageHistoryResponseDto from '../../../service/dividend/dto/DividendPercentageHistoryResponseDto';

interface ITickerDividendPercentageHistoryChart {
	data: DividendPercentageHistoryResponseDto;
}

const TickerDividendPercentageHistoryChart: React.FC<
	ITickerDividendPercentageHistoryChart
> = ({ data }) => {
	const { historicalDividendPercentages, averageDividendPercentage } = data;

	const transformedHistoryPayments = historicalDividendPercentages.map(it => ({
		amount: it.dividendPercentage,
		average: averageDividendPercentage,
		date: it.date,
	}));

	return (
		<div>
			<Card>
				<AreaChart
					data={transformedHistoryPayments}
					categories={['amount', 'average']}
					dataKey='date'
					height='h-72'
					colors={['indigo', 'cyan']}
					marginTop='mt-4'
					autoMinValue
					showXAxis={false}
				/>
			</Card>
		</div>
	);
};

export default TickerDividendPercentageHistoryChart;
