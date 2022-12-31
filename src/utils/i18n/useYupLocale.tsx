import * as React from 'react';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const useYupLocale = () => {
	const {
		t,
		i18n: { language },
	} = useTranslation();

	const yupLocale = {
		mixed: {
			required: t('validation.required'),
		},
	};
	React.useEffect(() => {
		yup.setLocale(yupLocale);
	}, [language]);
};

export default useYupLocale;
