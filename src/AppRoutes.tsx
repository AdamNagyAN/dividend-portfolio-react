import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'Routes';
import TickerPage from "./pages/ticker/TickerPage";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={ROUTES.LOGIN} element={<span>test</span>} />
			<Route path={ROUTES.TICKER} element={<TickerPage/>} />
		</Routes>
	);
};

export default AppRoutes;
