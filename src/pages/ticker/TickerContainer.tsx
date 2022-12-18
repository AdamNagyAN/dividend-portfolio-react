import * as React from 'react';
import {
	AreaChart,
	Block,
	Card,
	Flex,
	Title,
	Toggle,
	ToggleItem,
} from '@tremor/react';
import { useTranslation } from 'react-i18next';

interface ITickerContainerProps {
	data: any;
	// eslint-disable-next-line no-unused-vars
	setRange: (value: string) => void;
	range: string;
}

const TickerContainer: React.FC<ITickerContainerProps> = ({
	data,
	setRange,
	range,
}) => {
	const { t } = useTranslation();
	const historyPayments = Object.keys(data.events.dividends).map(
		(it: string) => data.events.dividends[it]
	);

	const ranges = data.meta.validRanges;

	const transformedHistoryPayments = historyPayments.map(it => ({
		amount: it.amount,
		date: new Date(it.date * 1000).toLocaleDateString(),
	}));

	return (
		<Card>
			<Flex>
				<Block>
					<Title>
						{t('dividend-history.chart-title', { symbol: data.meta.symbol })}
					</Title>
				</Block>
				<Toggle
					color='zinc'
					defaultValue={range}
					handleSelect={value => setRange(value)}
				>
					{ranges.map((it: string) => (
						<ToggleItem value={it} text={it} />
					))}
				</Toggle>
			</Flex>

			<AreaChart
				data={transformedHistoryPayments}
				categories={['amount']}
				dataKey='date'
				height='h-72'
				colors={['indigo', 'cyan']}
				marginTop='mt-4'
			/>
		</Card>
	);
};

export default TickerContainer;
