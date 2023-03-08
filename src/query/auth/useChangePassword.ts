import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import RequestWithCaptchaToken from '../../utils/dto/RequestWithCaptchaToken';
import authClient from '../../service/auth/authClient';
import ChangePasswordRequestDto from '../../service/auth/dto/ChangePasswordRequestDto';

const useChangePassword = (): UseMutationResult<
  AxiosResponse<void>,
  unknown,
  RequestWithCaptchaToken<ChangePasswordRequestDto>
> =>
  useMutation(request =>
    authClient.changePassword(request.request, request.captchaToken)
  );

export default useChangePassword;
