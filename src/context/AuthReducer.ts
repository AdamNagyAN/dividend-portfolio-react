export enum AuthContextActionTypes {
	SET_USER_TOKEN = 'SET_USER_TOKEN',
	SET_USER_DATA = 'SET_USER_DATA',
}

export interface InternalUserData {
	sub: string;
	authorities: string[];
}
export interface AuthContextDataState {
	userToken?: string;
	userData?: {
		sub: string;
		authorities: string[];
	} | null;
}

interface SetInternalUserToken {
	type: AuthContextActionTypes.SET_USER_TOKEN;
	value?: string;
}

interface SetInternalUserData {
	type: AuthContextActionTypes.SET_USER_DATA;
	value?: InternalUserData | null;
}

export type AuthContextActions = SetInternalUserToken | SetInternalUserData;

export const authContextDataReducer = (
	state: AuthContextDataState,
	action: AuthContextActions
): AuthContextDataState => {
	switch (action.type) {
		case AuthContextActionTypes.SET_USER_TOKEN:
			return { ...state, userToken: action.value };
		case AuthContextActionTypes.SET_USER_DATA:
			return { ...state, userData: action.value };
		default:
			return state;
	}
};
