// src/components/Fail.jsx
import { useNavigate } from "react-router-dom";

export default function Fail() {
  const navigate = useNavigate();

  return (
    <div
      className="p-6 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.redd.it/zjgs096khv591.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 p-10 rounded-2xl shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Ooooppss try again!</h1>
        <p className="text-gray-500 font-semibold mb-6">Invalid username or password!<br></br> Please try again!</p>
        <button
          className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
          onClick={() => navigate("/")}
        >
          Back to Login
        </button>
      </div>
    </div>
  )
}
