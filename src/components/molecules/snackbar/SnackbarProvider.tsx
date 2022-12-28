import React, { createContext, useContext, useState } from 'react';
import Snackbar, { ISnackbarProps } from './Snackbar';

export interface GlobalSnackbarProps extends ISnackbarProps {
	open?: boolean;
}

const initialValue = {
	snackbar: {
		message: '',
		title: '',
		open: false,
	},
	setSnackbar: (state: GlobalSnackbarProps) => {
		return state;
	},
};

export const SnackbarContext = createContext<{
	// eslint-disable-next-line no-unused-vars
	setSnackbar: (state: GlobalSnackbarProps) => void;
}>(initialValue);

interface SnackbarProviderProps {
	children?: React.ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
	children,
}) => {
	const [snackbar, setSnackbar] = useState<GlobalSnackbarProps>(
		initialValue.snackbar
	);

	const setSnackbarOpen = React.useCallback(
		(state: GlobalSnackbarProps) => {
			setSnackbar({
				...state,
				open: true,
			});
		},
		[setSnackbar]
	);

	const contextValue = React.useMemo(() => {
		return {
			setSnackbar: setSnackbarOpen,
		};
	}, [setSnackbarOpen]);

	return (
		<SnackbarContext.Provider value={contextValue}>
			{children}
			<Snackbar
				onClose={() => setSnackbar({ ...snackbar, open: false })}
				{...snackbar}
			/>
		</SnackbarContext.Provider>
	);
};

// eslint-disable-next-line no-unused-vars
export const useSnackbar = (): ((state: GlobalSnackbarProps) => void) => {
	return useContext(SnackbarContext).setSnackbar;
};
