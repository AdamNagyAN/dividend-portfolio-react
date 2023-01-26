import { useQuery, UseQueryResult } from '@tanstack/react-query';
import stockClient from '../../service/stock/stockClient';
import FinancialDataResponseDto from '../../service/stock/dto/FinancialDataResponseDto';

const GET_FINANCIAL_DATA_KEY = 'get-financial-data';

const useGetFinancialData = (
  symbol: string | undefined
): UseQueryResult<FinancialDataResponseDto> => {
  return useQuery(
    [GET_FINANCIAL_DATA_KEY, symbol],
    () => stockClient.getFinancialData(symbol).then(res => res.data),
    {
      enabled: !!symbol,
    }
  );
};

export default useGetFinancialData;
