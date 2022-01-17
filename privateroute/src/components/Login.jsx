import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Login = () => {
  const { handleToken, token } = useContext(AuthContext);
  const [form, setForm] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleSubmit = () => {
    handleToken("yeveuevb");
  };
  const logout = () => {
    handleToken("");
  };
  return !token ? (
    <div>
      Welcome to Login
      <br />
      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="username"
      />
      <input
        name="password"
        onChange={handleChange}
        type="text"
        placeholder="password"
      />
      <input onClick={handleSubmit} type="submit" />
    </div>
  ) : (
    <input onClick={logout} value="logout" type="submit" />
  );
};
