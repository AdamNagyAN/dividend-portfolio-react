import { UserDataDto } from '../utils/jwt/parseJwt';
import sessionStorageUtils from '../utils/storage/SessionStorageUtils';

export enum AuthContextActionTypes {
	SET_USER_TOKEN = 'SET_USER_TOKEN',
	SET_USER_DATA = 'SET_USER_DATA',
	SET_STATE = 'SET_STATE',
	LOG_OUT = 'LOG_OUT',
}

export interface AuthContextDataState {
	userToken?: string;
	userData?: UserDataDto | null;
}

interface SetInternalUserToken {
	type: AuthContextActionTypes.SET_USER_TOKEN;
	value?: string;
}

interface SetInternalUserData {
	type: AuthContextActionTypes.SET_USER_DATA;
	value?: UserDataDto | null;
}

interface SetState {
	type: AuthContextActionTypes.SET_STATE;
	userToken?: string;
	userData?: UserDataDto | null;
}

interface LogOut {
	type: AuthContextActionTypes.LOG_OUT;
}

export type AuthContextActions =
	| SetInternalUserToken
	| SetInternalUserData
	| SetState
	| LogOut;

export const authContextDataReducer = (
	state: AuthContextDataState,
	action: AuthContextActions
): AuthContextDataState => {
	switch (action.type) {
		case AuthContextActionTypes.SET_USER_TOKEN:
			return { ...state, userToken: action.value };
		case AuthContextActionTypes.SET_USER_DATA:
			return { ...state, userData: action.value };
		case AuthContextActionTypes.SET_STATE:
			return { ...state, userData: action.userData, userToken: action.userToken };
		case AuthContextActionTypes.LOG_OUT:
			sessionStorageUtils.clearAuthToken();
			return {};
		default:
			return state;
	}
};
