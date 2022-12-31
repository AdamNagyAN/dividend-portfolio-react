import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import LoginRequestDto from './dto/LoginRequestDto';
import LoginResponseDto from './dto/LoginResponseDto';

const login = (request: LoginRequestDto): AxiosPromise<LoginResponseDto> => {
	return axiosBase.post('/v1/auth/login', request);
};

const validate = (request: string): AxiosPromise<LoginResponseDto> => {
	return axiosBase.post('/v1/auth/validate', {
		token: request,
	});
};

const authClient = {
	login,
	validate,
};

export default authClient;
