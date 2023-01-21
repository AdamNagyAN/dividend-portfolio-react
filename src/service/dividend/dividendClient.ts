import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import DividendHistoryResponseDto from './dto/DividendHistoryResponseDto';
import DividendPercentageHistoryResponseDto from './dto/DividendPercentageHistoryResponseDto';
import StockSummaryResponseDto from './dto/StockSummaryResponseDto';

const getDividendData = (
	symbol: string | undefined,
	timeFrame: string
): AxiosPromise<DividendHistoryResponseDto> => {
	return axiosBase.get(
		`/v1/symbol/${symbol}/dividend-history?timeFrame=${timeFrame}`
	);
};

const getDividendPercentageHistory = (
	symbol: string | undefined,
	timeFrame: string
): AxiosPromise<DividendPercentageHistoryResponseDto> => {
	return axiosBase.get(
		`/v1/symbol/${symbol}/dividend-percentage-history?timeFrame=${timeFrame}`
	);
};

const getStockSummary = (
	symbol: string | undefined
): AxiosPromise<StockSummaryResponseDto> => {
	return axiosBase.get(`/v1/symbol/${symbol}`);
};

const dividendClient = {
	getStockSummary,
	getDividendData,
	getDividendPercentageHistory,
};

export default dividendClient;
