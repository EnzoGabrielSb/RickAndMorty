import { useState } from "react";
import validate from "./Validations";
import "./Form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div class="form">
      <form onSubmit={handleSubmit}>
        <div class="username-box">
          <input
            autocomplete="off"
            name="username"
            type="text"
            value={userData.username}
            placeholder="Enter your email."
            onChange={handleInputChange}
          />
          {errors.username && <p> {errors.username} </p>}
          <label htmlFor="username">Username: </label>
        </div>

        <div class="username-box">
          <input
            autocomplete="off"
            name="password"
            type="text"
            value={userData.password}
            placeholder="Enter your password."
            onChange={handleInputChange}
          />
          {errors.password && <p> {errors.password} </p>}
          <label htmlFor="password">Password: </label>
        </div>
        <center>
          <a>
            <button>LOGIN</button>
            <span></span>
          </a>
        </center>
      </form>
    </div>
  );
};

export default Form;
