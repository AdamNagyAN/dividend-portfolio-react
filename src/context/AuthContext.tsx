import React, { Dispatch, useContext } from 'react';
import {
	AuthContextActions,
	authContextDataReducer,
	AuthContextDataState,
} from './AuthReducer';

interface AuthContextState {
	state: AuthContextDataState;
	dispatch: Dispatch<AuthContextActions>;
}

export const AuthContext = React.createContext<AuthContextState>({
	state: {},
	dispatch: () => {
		throw Error('AuthContext dispatch only usable with provided function');
	},
});

const initialState: AuthContextDataState = {};

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = React.useReducer(
		authContextDataReducer,
		initialState
	);
	const contextValue = React.useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export const useAuthContextState = (): AuthContextDataState => {
	const { state } = useContext(AuthContext);
	return state;
};

export const useAuthContextDispatch = (): Dispatch<AuthContextActions> => {
	const { dispatch } = useContext(AuthContext);
	return dispatch;
};
