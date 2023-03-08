import * as yup from 'yup';
import { TFunction } from 'i18next';
import emailSchema from '../../../utils/validation/emailSchema';

export interface ResendTokenValues {
  email: string;
}

export const resendTokenSchema = (
  t: TFunction
): yup.SchemaOf<ResendTokenValues> => {
  return yup.object().shape({
    email: emailSchema(t).required(),
  });
};
