import * as yup from 'yup';
import { TFunction } from 'i18next';
import emailSchema from '../../../utils/validation/emailSchema';

export interface ResetPasswordValues {
  email: string;
}

export const resetPasswordSchema = (
  t: TFunction
): yup.SchemaOf<ResetPasswordValues> => {
  return yup.object().shape({
    email: emailSchema(t).required(),
  });
};

export interface ChangePasswordValues {
  password: string;
  password2: string;
}

export const changePasswordSchema = (): yup.SchemaOf<ChangePasswordValues> => {
  return yup.object().shape({
    password: yup.string().min(6).max(255).required(),
    password2: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
  });
};
