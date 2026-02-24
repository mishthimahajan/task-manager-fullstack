import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/login", form);
    login(data);
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-linear-to-r from-indigo-500 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
          Login
        </button>

        <p className="text-center mt-4">
          No account?{" "}
          <Link to="/register" className="text-indigo-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}