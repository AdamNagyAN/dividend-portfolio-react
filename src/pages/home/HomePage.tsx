import * as React from 'react';
import AppBar from '../../components/organisms/appbar/AppBar';
import Loader from '../../components/atoms/loader/Loader';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
	return (
		<>
			<AppBar />
			<Loader />
		</>
	);
};

export default HomePage;
