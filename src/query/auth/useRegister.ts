import {useMutation, UseMutationResult} from '@tanstack/react-query';
import {AxiosResponse} from 'axios';
import authClient from '../../service/auth/authClient';
import RegisterRequestDto from '../../service/auth/dto/RegisterRequestDto';
import RequestWithCaptchaToken from "../../utils/dto/RequestWithCaptchaToken";

export const AUTH_REGISTER_KEY = 'auth-register';

const useRegister = (): UseMutationResult<
  AxiosResponse<void>,
  unknown,
  RequestWithCaptchaToken<RegisterRequestDto>
> =>
  useMutation(request => authClient.register(request.request, request.captchaToken), {
    mutationKey: [AUTH_REGISTER_KEY],
  });

export default useRegister;
