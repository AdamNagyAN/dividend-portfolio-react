import { useQuery, UseQueryResult } from '@tanstack/react-query';
import dividendClient from '../../service/dividend/dividendClient';
import DividendPercentageHistoryResponseDto from '../../service/dividend/dto/DividendPercentageHistoryResponseDto';

const DIVIDEND_PERCENTAGE_HISTORY = 'dividend-percentage-history';

const useGetDividendPercentage = (
	symbol: string | undefined,
	timeFrame: string
): UseQueryResult<DividendPercentageHistoryResponseDto> => {
	return useQuery(
		[DIVIDEND_PERCENTAGE_HISTORY, symbol, timeFrame],
		() =>
			dividendClient
				.getDividendPercentageHistory(symbol, timeFrame)
				.then(res => res.data),
		{
			enabled: !!symbol,
		}
	);
};

export default useGetDividendPercentage;
