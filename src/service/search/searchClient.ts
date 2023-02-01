import axios, { AxiosPromise } from 'axios';

const search = (query?: string): AxiosPromise<any> => {
  return axios.get(`/v1/finance/search?q=${query}`);
};

const searchClient = {
  search,
};

export default searchClient;
