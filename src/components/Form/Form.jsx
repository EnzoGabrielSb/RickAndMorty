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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        name="username"
        type="text"
        value={userData.username}
        placeholder="Ingrese su username."
        onChange={handleInputChange}
      />
      {errors.username && <p> {errors.username} </p>}
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="text"
        value={userData.password}
        placeholder="Ingrese su password"
        onChange={handleInputChange}
      />
      {errors.password && <p> {errors.password} </p>}
      <hr />
      <br />

      <button>LOGIN</button>
    </form>
  );
};

export default Form;
