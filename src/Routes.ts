export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  RESEND_TOKEN: '/resend',
  CONFIRM_TOKEN: '/confirm',
  RESET_PASSWORD: "/reset-password",
  TICKER: (symbol: string) => `/ticker/${symbol}`,
};
