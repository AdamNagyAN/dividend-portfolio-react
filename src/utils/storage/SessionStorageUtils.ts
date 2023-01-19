const AUTH_TOKEN_KEY = 'user-token';
const setAuthToken = (token: string) => {
	sessionStorage.setItem(AUTH_TOKEN_KEY, token);
};

const getAuthToken = (): string | undefined => {
	return sessionStorage.getItem(AUTH_TOKEN_KEY) ?? undefined;
};

const clearAuthToken = () => {
	sessionStorage.removeItem(AUTH_TOKEN_KEY);
};

const SessionStorageUtils = { setAuthToken, getAuthToken, clearAuthToken };

export default SessionStorageUtils;
