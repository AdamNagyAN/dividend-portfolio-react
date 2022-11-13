import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';


const getDividendData = (
	symbol?: string,
	interval = '1mo',
	range = '1y',
): AxiosPromise<any> => {
	return axiosBase.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?events=div&interval=${interval}&range=${range}`);
};

const dividendClient = {
	getDividendData,
};

export default dividendClient;
