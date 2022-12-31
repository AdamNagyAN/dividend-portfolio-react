import * as yup from 'yup';

export interface LoginValues {
	email: string;
	password: string;
}

export const loginSchema = (): yup.SchemaOf<LoginValues> => {
	return yup.object().shape({
		email: yup.string().required(),
		password: yup.string().required(),
	});
};
