// src/components/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ axios import

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/signup`,
        { username, password }
      );

      if (res.status === 200) {
        navigate("/");
      } else {
        alert("Signup failed, try again!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="p-6 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.redd.it/zjgs096khv591.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-6 text-center">
          Netflix-Signup
        </h1>
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="UserName"
            className="opacity-45 bg-black text-white p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="opacity-45 bg-black text-white p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Signup
          </button>
        </form>
        <p className="text-white mt-4 text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-red-600 cursor-pointer font-semibold"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
