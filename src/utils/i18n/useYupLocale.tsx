import * as React from 'react';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const useYupLocale = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const yupLocale = {
    string: {
      max: t('validation.max'),
      min: t('validation.min'),
    },
    mixed: {
      required: t('validation.required'),
    },
  };
  React.useEffect(() => {
    yup.setLocale(yupLocale);
  }, [language]);
};

export default useYupLocale;
