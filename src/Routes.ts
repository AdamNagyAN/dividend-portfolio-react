export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  TICKER: (symbol: string) => `/ticker/${symbol}`,
};
