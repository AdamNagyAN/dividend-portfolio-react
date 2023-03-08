import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import LoginRequestDto from './dto/LoginRequestDto';
import LoginResponseDto from './dto/LoginResponseDto';
import RegisterRequestDto from './dto/RegisterRequestDto';
import ResendEmailDto from './dto/ResendEmailDto';
import HEADERS from '../Headers';
import ResetPasswordEmailDto from './dto/ResetPasswordEmailDto';
import ChangePasswordRequestDto from './dto/ChangePasswordRequestDto';

const login = (
  request: LoginRequestDto,
  capchaToken: string
): AxiosPromise<LoginResponseDto> => {
  return axiosBase.post('/v1/auth/login', request, {
    headers: {
      [HEADERS.CAPTCHA_TOKEN]: capchaToken,
    },
  });
};

const register = (
  request: RegisterRequestDto,
  capchaToken: string
): AxiosPromise<void> => {
  return axiosBase.post('/v1/auth/register', request, {
    headers: {
      [HEADERS.CAPTCHA_TOKEN]: capchaToken,
    },
  });
};

const confirm = (token: string): AxiosPromise<void> => {
  return axiosBase.get('/v1/auth/confirm', {
    params: {
      token,
    },
  });
};

const resendEmail = (
  request: ResendEmailDto,
  capchaToken: string
): AxiosPromise<void> => {
  return axiosBase.post('/v1/auth/resend-email', request, {
    headers: {
      [HEADERS.CAPTCHA_TOKEN]: capchaToken,
    },
  });
};

const sendResetPasswordEmail = (
  request: ResetPasswordEmailDto,
  capchaToken: string
): AxiosPromise<void> => {
  return axiosBase.post('/v1/auth/new-password', request, {
    headers: {
      [HEADERS.CAPTCHA_TOKEN]: capchaToken,
    },
  });
};

const changePassword = (
  request: ChangePasswordRequestDto,
  capchaToken: string
): AxiosPromise<void> => {
  return axiosBase.put('/v1/auth/change-password', request, {
    headers: {
      [HEADERS.CAPTCHA_TOKEN]: capchaToken,
    },
  });
};

const authClient = {
  login,
  register,
  confirm,
  resendEmail,
  sendResetPasswordEmail,
  changePassword,
};

export default authClient;
