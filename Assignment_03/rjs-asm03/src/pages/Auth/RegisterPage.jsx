import React from "react";
import Register from "../../components/Form/Register/Register.jsx";
import AuthLayout from "../../components/Layouts/AuthLayout.jsx";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
