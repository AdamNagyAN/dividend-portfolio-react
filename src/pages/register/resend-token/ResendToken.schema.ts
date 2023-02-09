import * as yup from 'yup';
import { TFunction } from 'i18next';
import { EMAIL_REGEX } from '../Register.schema';

export interface ResendTokenValues {
  email: string;
}

export const resendTokenSchema = (t: TFunction) => {
  return yup.object().shape({
    email: yup
      .string()
      .matches(EMAIL_REGEX, {
        excludeEmptyString: true,
        message: t('validation.email'),
      })
      .required(),
  });
};
