import HistoricalDividendDto from './HistoricalDividendDto';

interface DividendHistoryResponseDto {
	symbol: string;
	companyName: string;
	historicalDividends: HistoricalDividendDto[];
	validTimeFrames: string[];
}

export default DividendHistoryResponseDto;
