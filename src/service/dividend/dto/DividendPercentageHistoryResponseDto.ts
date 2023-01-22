import HistoricalDividendPercentageDto from './HistoricalDividendPercentageDto';

interface DividendPercentageHistoryResponseDto {
	averageDividendPercentage: number;
	currentDividendPercentage: number;
	historicalDividendPercentages: HistoricalDividendPercentageDto[];
	validTimeFrames: string[];
}

export default DividendPercentageHistoryResponseDto;
