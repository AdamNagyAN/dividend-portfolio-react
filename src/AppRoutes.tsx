import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'Routes';
import TickerPage from './pages/ticker/TickerPage';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<HomePage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.TICKER(':symbol')} element={<TickerPage />} />
		</Routes>
	);
};

export default AppRoutes;
