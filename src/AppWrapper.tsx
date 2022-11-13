import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export interface IAppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper: React.FC<IAppWrapperProps> = ({ children }) => {
	return (
		<BrowserRouter>
			{children}
		</BrowserRouter>
	);
};

export default AppWrapper;
