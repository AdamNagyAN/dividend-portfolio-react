import * as yup from 'yup';
import { TFunction } from 'i18next';

export interface RegisterValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
}

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const registerSchema = (t: TFunction) => {
  return yup.object().shape(
    {
      firstname: yup.string().min(2).max(255).required(),
      lastname: yup.string().min(2).max(255).required(),
      email: yup
        .string()
        .matches(EMAIL_REGEX, {
          excludeEmptyString: true,
          message: t('validation.email'),
        })
        .required(),
      password: yup.string().min(6).max(255).required(),
      password2: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    },
    [['password', 'password2']]
  );
};
