import { useQuery, UseQueryResult } from '@tanstack/react-query';
import stockClient from '../../service/stock/stockClient';
import StockSummaryResponseDto from '../../service/stock/dto/StockSummaryResponseDto';

const GET_STOCK_SUMMARY_KEY = 'stock-summary';

const useGetStockSummary = (
  symbol: string | undefined
): UseQueryResult<StockSummaryResponseDto> => {
  return useQuery(
    [GET_STOCK_SUMMARY_KEY, symbol],
    () => stockClient.getStockSummary(symbol).then(res => res.data),
    {
      enabled: !!symbol,
    }
  );
};

export default useGetStockSummary;
