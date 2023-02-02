import HistoricalDividendDto from './HistoricalDividendDto';

interface DividendHistoryResponseDto {
  historicalDividends: HistoricalDividendDto[];
  divGrowthRates: {
    dgr1?: number;
    dgr3?: number;
    dgr5?: number;
    dgr10?: number;
  };
  validTimeFrames: string[];
}

export default DividendHistoryResponseDto;
