import * as React from 'react';
import { Flex } from '@tremor/react';
import AppBar from '../../components/organisms/appbar/AppBar';
import SideBar from '../../components/organisms/sidebar/SideBar';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
	return (
		<>
			<AppBar />
			<Flex>
				<SideBar />
			</Flex>
		</>
	);
};

export default HomePage;
