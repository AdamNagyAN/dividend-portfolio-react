import * as React from 'react';
import { AreaChart, Card, Flex } from '@tremor/react';
import tw from 'twin.macro';
import { useTranslation } from 'react-i18next';
import DividendHistoryResponseDto from '../../../service/dividend/dto/DividendHistoryResponseDto';
import useTitle from '../../../utils/hooks/useTitle';
import Tabs from '../../../components/molecules/tabs/Tabs';
import Tab from '../../../components/molecules/tabs/Tab';

// const CustomToggle = styled.div`
// 	${css`
// 		& button {
// 			${tw`bg-white mx-0.5`}
// 		}
// 	`}
// `;

interface ITickerContainerProps {
	data: DividendHistoryResponseDto;
	// eslint-disable-next-line no-unused-vars
	setRange: (value: string) => void;
	range: string;
}

const TickerDividendHistoryChart: React.FC<ITickerContainerProps> = ({
	data,
	setRange,
	range,
}) => {
	const { historicalDividends, validTimeFrames, symbol } = data;
	const { t } = useTranslation();
	useTitle(t('page-title', { value: symbol.toUpperCase() }));

	const transformedHistoryPayments = historicalDividends.map(it => ({
		amount: it.adjDividend,
		date: it.date,
	}));

	const handleSelect = (value: string) => {
		setRange(value);
	};

	return (
		<div>
			<Card>
				<Flex justifyContent='justify-end'>
					<Tabs
						selectedValue={range}
						handleSelect={handleSelect}
						customCss={tw`bg-gray-100`}
						tw='bg-gray-200'
					>
						{validTimeFrames.map((it: string) => (
							<Tab key={it} value={it}>
								{it}
							</Tab>
						))}
					</Tabs>
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

export default TickerDividendHistoryChart;
