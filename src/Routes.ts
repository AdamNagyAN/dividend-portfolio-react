export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  RESEND_TOKEN: '/resend',
  CONFIRM_TOKEN: '/confirm',
  TICKER: (symbol: string) => `/ticker/${symbol}`,
};
