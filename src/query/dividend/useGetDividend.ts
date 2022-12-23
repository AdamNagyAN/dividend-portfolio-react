import { useQuery, UseQueryResult } from '@tanstack/react-query';
import dividendClient from '../../service/dividend/dividendClient';
import DividendHistoryResponseDto from '../../service/dividend/dto/DividendHistoryResponseDto';

const GET_DIVIDEND_KEY = 'GET_DIVIDEND';

const useGetDividend = (
	symbol: string | undefined,
	timeFrame: string
): UseQueryResult<DividendHistoryResponseDto> => {
	return useQuery(
		[GET_DIVIDEND_KEY, symbol, timeFrame],
		() => dividendClient.getDividendData(symbol, timeFrame).then(res => res.data),
		{
			enabled: !!symbol,
		}
	);
};

export default useGetDividend;
