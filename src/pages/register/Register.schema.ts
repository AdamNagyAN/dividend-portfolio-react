import * as yup from 'yup';
import { TFunction } from 'i18next';
import emailSchema from '../../utils/validation/emailSchema';

export interface RegisterValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
}

export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const registerSchema = (t: TFunction): yup.SchemaOf<RegisterValues> => {
  return yup.object().shape(
    {
      firstname: yup.string().min(2).max(255).required(),
      lastname: yup.string().min(2).max(255).required(),
      email: emailSchema(t).required(),
      password: yup.string().min(6).max(255).required(),
      password2: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
    },
    [['password', 'password2']]
  );
};
