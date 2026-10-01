import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    setError(null);
    const newUser = {
      username,
      password,
    };

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to login");
      }
      localStorage.setItem("user", JSON.stringify(data));

      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={submitForm}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
