import * as React from 'react';
import { AreaChart, Card, Title,Flex, Block, Toggle, ToggleItem } from '@tremor/react';
import { useParams } from 'react-router-dom';
import useGetDividend from '../../query/dividend/useGetDividend';

const TickerPage: React.FC = () => {
	const [range, setRange] = React.useState('max')
	const {symbol} = useParams<{symbol: string}>();
	const {data, refetch} = useGetDividend(symbol, '1mo', range)
	if(!data) {
		return null;
	}
	const historyPayments = Object.keys(data.events.dividends).map((it: string) => data.events.dividends[it])
	const transformedHistoryPayments = historyPayments.map(it => ({amount: it.amount, date: new Date(it.date * 1000).toLocaleDateString()}))
	const ranges = data.meta.validRanges
	const handleRangeChange = (value: string) => {
		setRange(value);
		refetch();
	}
	return (
		<Card>
			<Flex>
				<Block>
					<Title>Dividend history of {data.meta.symbol}</Title>
				</Block>
				<Toggle
					color="zinc"
					defaultValue='max'
					handleSelect={ (value) => handleRangeChange(value) }
				>
					{ranges.map((it: string) => (<ToggleItem
						value={it}
						text={it}
					/>))}
				</Toggle>
			</Flex>

			<AreaChart
				data={transformedHistoryPayments}
				categories={['amount']}
				dataKey="date"
				height="h-72"
				colors={["indigo", "cyan"]}
				marginTop="mt-4"
			/>
		</Card>
	);
};

export default TickerPage;
