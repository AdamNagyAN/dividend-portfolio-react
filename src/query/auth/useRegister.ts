import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import authClient from '../../service/auth/authClient';
import RegisterRequestDto from '../../service/auth/dto/RegisterRequestDto';

export const AUTH_REGISTER_KEY = 'auth-register';

const useRegister = (): UseMutationResult<
  AxiosResponse<void>,
  unknown,
  RegisterRequestDto
> =>
  useMutation(request => authClient.register(request), {
    mutationKey: [AUTH_REGISTER_KEY],
  });

export default useRegister;
