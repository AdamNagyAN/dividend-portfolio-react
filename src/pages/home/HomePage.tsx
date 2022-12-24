import * as React from 'react';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';

const HomePage: React.FC = () => {
	return (
		<>
			<AppBar />
			<div className='min-h-screen' />
			<Footer />
		</>
	);
};

export default HomePage;
