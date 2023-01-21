import * as React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';
import useTitle from '../../utils/hooks/useTitle';

const HomePage: React.FC = () => {
	const { t } = useTranslation();
	useTitle(t('page-title', { value: t('home.title') }));

	return (
		<>
			<AppBar />
			<Footer />
		</>
	);
};

export default HomePage;
