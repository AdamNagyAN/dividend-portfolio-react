import axios from 'axios';

const axiosBase = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export default axiosBase;
