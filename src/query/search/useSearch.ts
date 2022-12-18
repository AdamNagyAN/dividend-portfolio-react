import { useQuery, UseQueryResult } from '@tanstack/react-query';
import searchClient from '../../service/search/searchClient';

const SEARCH_KEY = 'SEARCH_KEY';

const useSearch = (query?: string): UseQueryResult<any> => {
	return useQuery(
		[SEARCH_KEY, query],
		() => searchClient.search(query).then(res => res.data.quotes),
		{ enabled: !!query }
	);
};

export default useSearch;
