import Auth from "../Auth/Auth.js";
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as UserAuth from "../utils/UserAuth.js"

function Login({ onLogin }) {
  // const [formValue, setFormValue] = useState({
  //   email: '',
  //   password: '',
  // })
  // const [error, setError] = useState(" ");
  // const navigate = useNavigate();
  // const { email, password } = formValue;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value
  //   });
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onLogin(email, password);
  // }
  return (
    <Auth
      name="login"
      title="Рады видеть!"
      button="Войти"
      sign="Еще не зарегистрированы?"
    // onSubmit={handleSubmit}
    // onChange={handleChange}
    // email={formValue.email}
    // password={formValue.password}
    // error={error}
    >
    </Auth>
  );
}

export default Login;