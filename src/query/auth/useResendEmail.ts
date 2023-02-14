import {AxiosResponse} from 'axios';
import {useMutation, UseMutationResult} from '@tanstack/react-query';
import authClient from '../../service/auth/authClient';
import ErrorDto from '../../utils/interceptors/ErrorDto';
import ResendEmailDto from '../../service/auth/dto/ResendEmailDto';
import RequestWithCaptchaToken from '../../utils/dto/RequestWithCaptchaToken';

const useResendEmail = (): UseMutationResult<
  AxiosResponse<void>,
  ErrorDto,
  RequestWithCaptchaToken<ResendEmailDto>
> =>
  useMutation(request =>
    authClient.resendEmail(request.request, request.captchaToken)
  );

export default useResendEmail;
