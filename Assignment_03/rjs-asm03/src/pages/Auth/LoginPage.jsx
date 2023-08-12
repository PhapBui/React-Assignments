import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout.jsx";
import FormLogin from "../../components/Form/Login/Login.jsx";

const LoginPage = () => {
  return (
    <AuthLayout>
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
