import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ axios for API calls

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`,
        { username, password }
      );

      if (res.data.success) {
        localStorage.setItem("username", username);
        localStorage.setItem("token", res.data.token || "dummy_token"); 
        navigate("/success");
      } else {
        navigate("/fail");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Try again!");
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
      <div className="bg-black bg-opacity-80 p-10 rounded-2xl shadow-md w-96 border border-black">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-6 text-center">
          Netflix-Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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
            className="bg-red-600 text-white py-2 rounded-md hover:bg-red-500 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-white text-center text-sm">
          Don't have an account?{" "}
          <span
            className="text-red-600 cursor-pointer font-semibold"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}
