import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-linear-to-r from-indigo-500 to-purple-600">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-96"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 border rounded-lg"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

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
          Register
        </button>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}