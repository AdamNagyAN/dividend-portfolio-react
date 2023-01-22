import * as React from 'react';
import { AreaChart, Card, Flex } from '@tremor/react';
import tw from 'twin.macro';
import DividendHistoryResponseDto from '../../../service/dividend/dto/DividendHistoryResponseDto';
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
	setRange: (value: string) => void;
	range: string;
}

const TickerDividendHistoryChart: React.FC<ITickerContainerProps> = ({
	data,
	setRange,
	range,
}) => {
	const { historicalDividends, validTimeFrames } = data;

	const transformedHistoryPayments = historicalDividends.map(it => ({
		Dividend: it.adjDividend,
		date: it.date,
	}));

	const dataFormatter = (number: number) => {
		const formattedNumber = Intl.NumberFormat(undefined, {
			maximumFractionDigits: 2,
		})
			.format(number)
			.toString();
		return `$${formattedNumber}`;
	};

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
					categories={['Dividend']}
					dataKey='date'
					height='h-72'
					colors={['indigo']}
					valueFormatter={dataFormatter}
					marginTop='mt-4'
					autoMinValue
				/>
			</Card>
		</div>
	);
};

export default TickerDividendHistoryChart;
