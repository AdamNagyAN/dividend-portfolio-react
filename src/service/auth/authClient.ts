import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import LoginRequestDto from './dto/LoginRequestDto';
import LoginResponseDto from './dto/LoginResponseDto';
import RegisterRequestDto from './dto/RegisterRequestDto';
import ResendEmailDto from './dto/ResendEmailDto';

const login = (request: LoginRequestDto): AxiosPromise<LoginResponseDto> => {
  return axiosBase.post('/v1/auth/login', request);
};

const register = (request: RegisterRequestDto): AxiosPromise<void> => {
  return axiosBase.post('/v1/auth/register', request);
};

const validate = (request: string): AxiosPromise<LoginResponseDto> => {
  return axiosBase.post('/v1/auth/validate', {
    token: request,
  });
};

const confirm = (token: string): AxiosPromise<void> => {
  return axiosBase.get('/v1/auth/confirm', { params: token });
};

const resendEmail = (request: ResendEmailDto): AxiosPromise<void> => {
  return axiosBase.post('/v1/auth/resend-email', request);
};

const authClient = {
  login,
  register,
  validate,
  confirm,
  resendEmail,
};

export default authClient;
