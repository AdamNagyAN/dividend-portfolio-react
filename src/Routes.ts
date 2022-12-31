export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	SIGNUP: '/signup',
	TICKER: (symbol: string) => `/ticker/${symbol}`,
};
