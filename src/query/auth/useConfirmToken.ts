import { useQuery, UseQueryResult } from '@tanstack/react-query';

import authClient from '../../service/auth/authClient';

const useConfirmToken = (token?: string | null): UseQueryResult<void> => {
  return useQuery([token], () => authClient.confirm(token as string), {
    enabled: !!token,
  });
};

export default useConfirmToken;
