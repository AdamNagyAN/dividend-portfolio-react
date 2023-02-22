import * as React from "react";
import { useSearchParams } from "react-router-dom";
import AppBar from "../../../components/organisms/appbar/AppBar";
import Footer from "../../../components/organisms/footer/Footer";
import ResetPasswordForm from "./ResendPasswordForm";
import NewPasswordForm from "./NewPasswordForm";

const ResetPasswordPage: React.FC = () => {
  const [params] = useSearchParams();
  const token = params.get('token');

  return (
    <>
      <AppBar />
      {!token ? <ResetPasswordForm /> : <NewPasswordForm />}
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
