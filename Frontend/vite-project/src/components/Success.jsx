
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  const user = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="p-6 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.redd.it/zjgs096khv591.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 text-red-600 p-12 rounded-2xl shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold mb-4 ">
          Welcome back, {user}!
        </h1>
        <p className="text-gray-500 font-semibold mb-6">
          Grab your popcorn, it’s movie time! 🍿
        </p>
        <button
          className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition"
          onClick={handleLogout}
        >
          WatchNow
        </button>
      </div>
    </div>
  );
}
