import { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import LoginResponseDto from '../../service/auth/dto/LoginResponseDto';
import LoginRequestDto from '../../service/auth/dto/LoginRequestDto';
import authClient from '../../service/auth/authClient';

export const AUTH_LOGIN_KEY = 'auth-login-key';

const useLogin = (): UseMutationResult<
  AxiosResponse<LoginResponseDto>,
  unknown,
  LoginRequestDto
> =>
  useMutation(request => authClient.login(request), {
    mutationKey: [AUTH_LOGIN_KEY],
  });

export default useLogin;
