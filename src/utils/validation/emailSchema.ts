import * as yup from 'yup';
import { TFunction } from 'i18next';
import { EMAIL_REGEX } from '../../pages/register/Register.schema';

const emailSchema = (t: TFunction): yup.StringSchema => {
  return yup.string().matches(EMAIL_REGEX, {
    excludeEmptyString: true,
    message: t('validation.email'),
  });
};

export default emailSchema;
