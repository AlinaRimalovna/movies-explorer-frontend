import Auth from "../Auth/Auth";
import React from 'react';
// import { Link } from 'react-router-dom';
// import * as UserAuth from "../utils/UserAuth.js"

function Register({ onRegister }) {
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
  //   onRegister(email, password);
  // }
  return (
    <>
      <Auth
        name="register"
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        sign="Уже зарегистрированы?"
      // onSubmit={handleSubmit}
      // onChange={handleChange}
      // email={formValue.email}
      // password={formValue.password}
      // error={error}
      >
        <label className="auth__field">
          Имя
          <input type="text" className="auth__input" id="name" name="name"
            required minLength="2" maxLength="30" placeholder="Алина" />
          {/* <span className="auth__error"></span> */}
        </label>
      </Auth>
    </>
  );
}

export default Register;