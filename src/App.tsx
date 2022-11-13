import React from 'react';
import AppWrapper from 'AppWrapper';
import AppRoutes from 'AppRoutes';
import AppLevelProviders from './AppLevelProviders';
import '@tremor/react/dist/esm/tremor.css';

function App() {
	return (
		<AppLevelProviders>
			<AppWrapper>
				<AppRoutes />
			</AppWrapper>
		</AppLevelProviders>
	);
}

export default App;
