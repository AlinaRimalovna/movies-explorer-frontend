import Auth from "../Auth/Auth";
import React, { useState } from 'react';
import { useFormValidation } from "../Validate/Validate";

function Register({ onRegister }) {
  const {values, handleChange, errors, isValid, isError, resetForm} = useFormValidation();
  const [isNameError, setIsNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  })

  const {name, email, password } = formValue;


  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    handleChange(e);
console.log(values)
    setFormValue({
      ...formValue,
      [name]: value
    });
    if (!errors.name) {
      setIsNameError(true)
    } else {setIsNameError(false)}
    if (!errors.email) {
      setIsEmailError(true)
    } else {setIsEmailError(false)}
    if (!errors.password) {
      setIsPasswordError(true)
    } else {setIsPasswordError(false)}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
    onRegister(formValue.name, email, password);
    resetForm();
  }

  return (
    <>
      <Auth
        form="register"
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        sign="Уже зарегистрированы?"
      onSubmit={handleSubmit}
      onChange={handleChangeRegister}
      user={formValue.name}
      nameErrors={errors.name}
      email={formValue.email}
      emailErrors={errors.email}
      password={formValue.password}
      passwordErrors={errors.password}
      isValid={isValid}
      isError={isError}
      isNameError={isNameError}
      isEmailError={isEmailError}
      isPasswordError={isPasswordError}
      >
      </Auth>
    </>
  );
}

export default Register;