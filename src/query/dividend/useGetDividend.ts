import { useQuery, UseQueryResult } from '@tanstack/react-query';
import dividendClient from '../../service/dividend/dividendClient';

const GET_DIVIDEND_KEY = 'GET_DIVIDEND';

const useGetDividend = (
	symbol?: string,
	interval?: string,
	range?: string
): UseQueryResult<any> => {
	return useQuery([GET_DIVIDEND_KEY, symbol, interval, range], () =>
		dividendClient
			.getDividendData(symbol, interval, range)
			.then(res => res.data.chart.result[0])
	);
};

export default useGetDividend;
