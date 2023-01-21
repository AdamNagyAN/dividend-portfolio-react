import { useQuery, UseQueryResult } from '@tanstack/react-query';
import dividendClient from '../../service/dividend/dividendClient';
import StockSummaryResponseDto from '../../service/dividend/dto/StockSummaryResponseDto';

const GET_STOCK_SUMMARY_KEY = 'stock-summary';

const useGetStockSummary = (
	symbol: string | undefined
): UseQueryResult<StockSummaryResponseDto> => {
	return useQuery(
		[GET_STOCK_SUMMARY_KEY, symbol],
		() => dividendClient.getStockSummary(symbol).then(res => res.data),
		{
			enabled: !!symbol,
		}
	);
};

export default useGetStockSummary;
