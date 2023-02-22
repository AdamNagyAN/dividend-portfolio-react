import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "Routes";
import TickerPage from "./pages/ticker/TickerPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ConfirmPage from "./pages/confirm/ConfirmPage";
import ResendTokenPage from "./pages/register/resend-token/ResendTokenPage";
import ResetPasswordPage from "./pages/login/reset-password/ResetPasswordPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.CONFIRM_TOKEN} element={<ConfirmPage />} />
      <Route path={ROUTES.RESEND_TOKEN} element={<ResendTokenPage />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTES.TICKER(':symbol')} element={<TickerPage />} />
    </Routes>
  );
};

export default AppRoutes;
