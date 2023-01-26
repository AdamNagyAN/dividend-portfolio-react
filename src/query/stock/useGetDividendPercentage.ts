import { useQuery, UseQueryResult } from '@tanstack/react-query';
import stockClient from '../../service/stock/stockClient';
import DividendPercentageHistoryResponseDto from '../../service/stock/dto/DividendPercentageHistoryResponseDto';

const DIVIDEND_PERCENTAGE_HISTORY = 'dividend-percentage-history';

const useGetDividendPercentage = (
  symbol: string | undefined,
  timeFrame: string
): UseQueryResult<DividendPercentageHistoryResponseDto> => {
  return useQuery(
    [DIVIDEND_PERCENTAGE_HISTORY, symbol, timeFrame],
    () =>
      stockClient
        .getDividendPercentageHistory(symbol, timeFrame)
        .then(res => res.data),
    {
      enabled: !!symbol,
    }
  );
};

export default useGetDividendPercentage;
