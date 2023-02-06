import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import LoginRequestDto from './dto/LoginRequestDto';
import LoginResponseDto from './dto/LoginResponseDto';
import RegisterRequestDto from './dto/RegisterRequestDto';

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

const authClient = {
  login,
  register,
  validate,
};

export default authClient;
