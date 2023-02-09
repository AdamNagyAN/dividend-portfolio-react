import { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import authClient from '../../service/auth/authClient';
import ErrorDto from '../../utils/interceptors/ErrorDto';
import ResendEmailDto from '../../service/auth/dto/ResendEmailDto';

const useResendEmail = (): UseMutationResult<
  AxiosResponse<void>,
  ErrorDto,
  ResendEmailDto
> => useMutation(request => authClient.resendEmail(request));

export default useResendEmail;
