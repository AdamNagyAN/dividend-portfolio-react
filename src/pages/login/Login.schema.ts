import * as yup from 'yup';
import { TFunction } from 'i18next';

export interface LoginValues {
	email: string;
	password: string;
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginSchema = (t: TFunction): yup.SchemaOf<LoginValues> => {
	return yup.object().shape({
		email: yup
			.string()
			.matches(emailRegex, {
				message: t('validation.email'),
				excludeEmptyString: true,
			})
			.required(),
		password: yup.string().required(),
	});
};
