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
import DividendHistoryResponseDto from '../../service/dividend/dto/DividendHistoryResponseDto';

interface ITickerContainerProps {
	data: DividendHistoryResponseDto;
	// eslint-disable-next-line no-unused-vars
	setRange: (value: string) => void;
	range: string;
}

const TickerContainer: React.FC<ITickerContainerProps> = ({
	data,
	setRange,
	range,
}) => {
	const { historicalDividends, validTimeFrames, symbol } = data;
	const { t } = useTranslation();

	const transformedHistoryPayments = historicalDividends.map(it => ({
		amount: it.adjDividend,
		date: it.date,
	}));

	return (
		<div className='w-full'>
			<Card>
				<Flex>
					<Block>
						<Title>{t('dividend-history.chart-title', { symbol })}</Title>
					</Block>
					<Toggle defaultValue={range} handleSelect={value => setRange(value)}>
						{validTimeFrames.map((it: string) => (
							<ToggleItem key={it} value={it} text={it} />
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
					autoMinValue
				/>
			</Card>
		</div>
	);
};

export default TickerContainer;
