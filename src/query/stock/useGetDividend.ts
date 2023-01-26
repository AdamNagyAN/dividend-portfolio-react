import { useQuery, UseQueryResult } from '@tanstack/react-query';
import stockClient from '../../service/stock/stockClient';
import DividendHistoryResponseDto from '../../service/stock/dto/DividendHistoryResponseDto';

const GET_DIVIDEND_KEY = 'GET_DIVIDEND';

const useGetDividend = (
  symbol: string | undefined,
  timeFrame: string
): UseQueryResult<DividendHistoryResponseDto> => {
  return useQuery(
    [GET_DIVIDEND_KEY, symbol, timeFrame],
    () => stockClient.getDividendData(symbol, timeFrame).then(res => res.data),
    {
      enabled: !!symbol,
    }
  );
};

export default useGetDividend;
