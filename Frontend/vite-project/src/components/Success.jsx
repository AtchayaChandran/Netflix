
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  const profiles = [
    { id: 1, name: localStorage.getItem("username") || "User", avatar: "https://i.pinimg.com/originals/59/48/cb/5948cb6f239d1681f2b808c705206025.jpg" },
    { id: 2, name: "Priya", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6P-uZQ-LFywB7T5XA0ReiicsmNNfJmd8Dw&s" },
  ];

  const handleProfileClick = (name) => {
    localStorage.setItem("username", name);
    navigate("/Watch");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white"
      style={{
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-red-600">
        Who's watching?
      </h1>

      <div className="flex space-x-6 mb-8">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition"
            onClick={() => handleProfileClick(profile.name)}
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-red-600 mb-3"
            />
            <span className="text-xl font-semibold">{profile.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 
