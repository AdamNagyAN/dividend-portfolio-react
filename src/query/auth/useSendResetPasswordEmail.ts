import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import RequestWithCaptchaToken from '../../utils/dto/RequestWithCaptchaToken';
import authClient from '../../service/auth/authClient';
import ResetPasswordEmailDto from '../../service/auth/dto/ResetPasswordEmailDto';

const useSendResetPasswordEmail = (): UseMutationResult<
  AxiosResponse<void>,
  unknown,
  RequestWithCaptchaToken<ResetPasswordEmailDto>
> =>
  useMutation(request =>
    authClient.sendResetPasswordEmail(request.request, request.captchaToken)
  );

export default useSendResetPasswordEmail;
