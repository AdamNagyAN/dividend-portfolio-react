import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type IAppLevelProvidersProps = {
	children: React.ReactNode;
};

const AppLevelProviders: React.FC<IAppLevelProvidersProps> = ({ children }) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default AppLevelProviders;
