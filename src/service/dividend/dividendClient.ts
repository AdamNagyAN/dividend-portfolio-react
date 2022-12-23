import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import DividendHistoryResponseDto from './dto/DividendHistoryResponseDto';

const getDividendData = (
	symbol: string | undefined,
	timeFrame: string
): AxiosPromise<DividendHistoryResponseDto> => {
	return axiosBase.get(
		`/api/v1/symbol/${symbol}/dividend-history?timeFrame=${timeFrame}`
	);
};

const dividendClient = {
	getDividendData,
};

export default dividendClient;
