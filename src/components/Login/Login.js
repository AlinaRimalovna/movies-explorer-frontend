import Auth from "../Auth/Auth.js";
import React, { useState, useEffect } from "react";
import { useFormValidation } from "../Validate/Validate";

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, isError, resetForm } =
    useFormValidation();
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValue;

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    resetForm();
  };
  useEffect(() => {
    if (!errors.email) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
    if (!errors.password) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  }, [formValue]);

  return (
    <Auth
      form="login"
      title="Рады видеть!"
      button="Войти"
      sign="Еще не зарегистрированы?"
      onSubmit={handleSubmit}
      onChange={handleChangeLogin}
      email={formValue.email}
      emailErrors={errors.email}
      password={formValue.password}
      passwordErrors={errors.password}
      isValid={isValid}
      isError={isError}
      isEmailError={isEmailError}
      isPasswordError={isPasswordError}
    ></Auth>
  );
}

export default Login;
