import {AxiosResponse} from 'axios';
import {useMutation, UseMutationResult} from '@tanstack/react-query';
import LoginResponseDto from '../../service/auth/dto/LoginResponseDto';
import LoginRequestDto from '../../service/auth/dto/LoginRequestDto';
import authClient from '../../service/auth/authClient';
import RequestWithCaptchaToken from '../../utils/dto/RequestWithCaptchaToken';

export const AUTH_LOGIN_KEY = 'auth-login';

const useLogin = (): UseMutationResult<
  AxiosResponse<LoginResponseDto>,
  unknown,
  RequestWithCaptchaToken<LoginRequestDto>
> =>
  useMutation(value => authClient.login(value.request, value.captchaToken), {
    mutationKey: [AUTH_LOGIN_KEY],
  });

export default useLogin;
