import * as React from 'react';
import { Bold, Card, Divider, Subtitle, Title } from '@tremor/react';
import { useTranslation } from 'react-i18next';
import StockSummaryResponseDto from '../../service/dividend/dto/StockSummaryResponseDto';
import useTitle from '../../utils/hooks/useTitle';

interface TickerSummaryProps {
	data: StockSummaryResponseDto;
}

const TickerSummary: React.FC<TickerSummaryProps> = ({ data }) => {
	const { t } = useTranslation('translation', { keyPrefix: 'ticker.summary' });
	const { symbol, companyName, price, ...other } = data;
	useTitle(t('page-title', { value: symbol.toUpperCase() }));
	const formatter = new Intl.NumberFormat('en-us', {
		notation: 'compact',
		maximumFractionDigits: 2,
		currency: 'USD',
		style: 'currency',
	});

	const numberFormatter = new Intl.NumberFormat(undefined, {
		maximumFractionDigits: 2,
	});

	const translatedSummaryData = [
		{
			name: t('market-cap'),
			value: formatter.format(other.marketCap),
		},
		{
			name: t('eps'),
			value: numberFormatter.format(other.eps),
		},
		{
			name: t('dividend-yield'),
			value: `${numberFormatter.format(
				other.annualDividendYield
			)} (${numberFormatter.format(other.annualDividendYieldPercent)}%)`,
		},
		{
			name: t('pe'),
			value: numberFormatter.format(other.pe),
		},
		{
			name: t('one-year-target-price'),
			value: numberFormatter.format(other.oneYearTargetPrice),
		},
		{
			name: t('earnings-announcement'),
			value: other.earningsAnnouncement
				? new Date(other.earningsAnnouncement).toLocaleDateString()
				: '',
		},
	];

	return (
		<div>
			<Card>
				<Title>{companyName}</Title>
				<div className='flex space-x-5'>
					<Subtitle>{symbol}</Subtitle>
					<Subtitle color='indigo'>
						<Bold>${price}</Bold>
					</Subtitle>
				</div>
				<Divider />
				{translatedSummaryData.map(it => (
					<div key={it.name} className='flex max-w-xl'>
						<div className='w-1/2'>{it.name}</div>
						<div className='w-1/2'>{it.value}</div>
					</div>
				))}
			</Card>
		</div>
	);
};

export default TickerSummary;
