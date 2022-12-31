import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from './components/molecules/snackbar/SnackbarProvider';
import { AuthContextProvider } from './context/AuthContext';

export type IAppLevelProvidersProps = {
	children: React.ReactNode;
};

const AppLevelProviders: React.FC<IAppLevelProvidersProps> = ({ children }) => {
	const queryClient = new QueryClient();
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<SnackbarProvider>
					<AuthContextProvider>{children}</AuthContextProvider>
				</SnackbarProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default AppLevelProviders;
