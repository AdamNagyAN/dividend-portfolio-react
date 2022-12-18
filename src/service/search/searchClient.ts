import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';

const search = (query?: string): AxiosPromise<any> => {
	return axiosBase.get(
		`https://query1.finance.yahoo.com/v1/finance/search?q=${query}`
	);
};

const searchClient = {
	search,
};

export default searchClient;
