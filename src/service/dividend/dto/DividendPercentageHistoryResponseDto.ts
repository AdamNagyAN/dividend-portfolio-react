import HistoricalDividendPercentageDto from './HistoricalDividendPercentageDto';

interface DividendPercentageHistoryResponseDto {
	averageDividendPercentage: number;
	currentDividendPercentage: number;
	historicalDividendPercentages: HistoricalDividendPercentageDto[];
}

export default DividendPercentageHistoryResponseDto;
