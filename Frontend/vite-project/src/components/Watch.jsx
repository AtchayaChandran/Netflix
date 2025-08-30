import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WatchNow() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/"); //----------------redirects to login page----------------
  };

  const videos = [
    {
      id: "wtlisSIjkHY",
      title: "Mahavatar Narsimha",
      thumbnail:
        "https://filmy-charcha.s3.ap-south-1.amazonaws.com/filmy-charcha/Movies/1736877640623_image_0.webp",
    },
    {
      id: "HbfH84JlojI",
      title: "8 Vasantalu",
      thumbnail:
        "https://th-i.thgim.com/public/incoming/r30b8p/article69715988.ece/alternates/LANDSCAPE_1200/8V-Still-T2.jpg",
    },
    {
      id: "RSZQZDHD0Fs",
      title: "Kalki 2898 AD",
      thumbnail:
        "https://i0.wp.com/blog.studiovity.com/wp-content/uploads/2024/07/kalki-2898-ad-review-1.jpg?fit=1024%2C576&ssl=1",
    },
    {
      id: "hSBwq8yrXf0",
      title: "World of Thama",
      thumbnail:
        "https://tomindia.s3.ap-south-1.amazonaws.com/prod/post/ogImage/1755778501529_a03d8c0d7823480cb71d750a24085e5a_World-of-Thama-bollywoodmovies-tomorrowsindia.jpg",
    },
    {
      id: "ueCc-AYUMRs",
      title: "Wednesday: Season 2",
      thumbnail:
        "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZEKsPYDwA-nwAf4_Sv-0VOXMnNeF5t8jvQVFjiiMWQOtMRkSPveQ9Blt4hqOPvK2QOScwP_-5eKD6eEeB-Avft8g83j6N1OX3eQNNrHbjFfhEKarc629f5wwks-1CR_QqrtJ9tKLCjwIfvpA5BTXarGc0A.jpg?r=57c",
    },
    {
      id: "qeVfT2iLiu0",
      title: "Coolie - Official Trailer",
      thumbnail:
        "https://static.moviecrow.com/marquee/coolie-nagarjuna-is-simon-in-rajinikanth-lokesh-kanagaraj-film/233570_thumb_665.jpg",
    },
    {
      id: "nsC5PhXS19Y",
      title: "Chhaava Teaser",
      thumbnail:
        "https://indiaglitz-media.s3.amazonaws.com/tamil/home/chhaava-review1322025m.jpg",
    },
    {
      id: "0f1sgQSdoDE",
      title: "Court",
      thumbnail: "https://i.ytimg.com/vi/0f1sgQSdoDE/hq720.jpg",
    },
    {
      id: "J1GvAIJBGFo",
      title: "Good Bad Ugly",
      thumbnail:
        "https://imagesvs.oneindia.com/img/2025/04/good-bad-ugly-review-01-1744223074.jpg",
    },
    {
      id: "6Ff044zFBCE",
      title: "Satyabhama",
      thumbnail:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00394044-grngnrzdta-landscape.jpg",
    },
    {
      id: "kgnJFZZV728",
      title: "Oh! Baby",
      thumbnail: "https://images.indianexpress.com/2019/07/oh-baby-759.jpg",
    },
    {
      id: "3fgpp_Cs-LE",
      title: "Mahanati",
      thumbnail:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQHDB7PxgUbLohxKh7VO6RBtI8TwmSfJnk978Lyf9L4Zv7mPNnWauQgOenLEpdJoJxmmuA6XJq0neNjfGBtOn1k2qyxPYejWSiWY9zjfx9xb8vcc54OZlpe62MXOw0YCYey5uFWZg9UmfR/s1600/Mahanati-poster-3.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black text-white p-6">
      {/*----------------Logout Button Top Right----------------*/}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-6 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-500 transition"
      >
        Logout
      </button>

      <h1 className="text-[27px] md:text-4xl font-extrabold mb-8 mt-[55px] text-red-600">
        Watch Something New
      </h1>

      {/*------------------Video Thumbnails------------------*/}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group cursor-pointer"
            onClick={() => setActiveVideo(video.id)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-60 h-36 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-110"
            />
            {/*----------------Overlay with Play Icon----------------*/}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-3xl">▶</span>
            </div>
            <p className="mt-2 text-center font-semibold">{video.title}</p>
          </div>
        ))}
      </div>

      {/*------------------Modal------------------*/}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative bg-black rounded-2xl shadow-xl p-4 w-[90%] max-w-4xl">
            {/*----------------Close Button----------------*/}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500 transition"
            >
              X
            </button>

            {/*----------------YouTube Video----------------*/}
            <div className="aspect-video">
              <iframe
                className="w-full h-[450px] rounded-xl"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
