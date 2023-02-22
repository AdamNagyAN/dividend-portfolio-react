import * as yup from "yup";
import { TFunction } from "i18next";
import { EMAIL_REGEX } from "../../register/Register.schema";

export interface ResetPasswordValues {
  email: string;
}

export const resetPasswordSchema = (t: TFunction): yup.SchemaOf<ResetPasswordValues> => {
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
