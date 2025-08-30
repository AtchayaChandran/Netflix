import { useState } from "react";

export default function WatchNow() {
  const [activeVideo, setActiveVideo] = useState(null); 

  const videos = [

   {
      id:"wtlisSIjkHY",
      title: "Mahavatar Narsimha",
      thumbnail: "https://filmy-charcha.s3.ap-south-1.amazonaws.com/filmy-charcha/Movies/1736877640623_image_0.webp",
   },

   {
      id:"HbfH84JlojI",
      title: "8 Vasantalu",
      thumbnail: "https://th-i.thgim.com/public/incoming/r30b8p/article69715988.ece/alternates/LANDSCAPE_1200/8V-Still-T2.jpg",
   },

   {
      id:"RSZQZDHD0Fs",
      title: "Kalki 2898 AD",
      thumbnail: "https://i0.wp.com/blog.studiovity.com/wp-content/uploads/2024/07/kalki-2898-ad-review-1.jpg?fit=1024%2C576&ssl=1",
   },

   {
      id:"hSBwq8yrXf0",
      title: "World of Thama",
      thumbnail: "https://tomindia.s3.ap-south-1.amazonaws.com/prod/post/ogImage/1755778501529_a03d8c0d7823480cb71d750a24085e5a_World-of-Thama-bollywoodmovies-tomorrowsindia.jpg",
   },

   {
      id: "ueCc-AYUMRs",
      title: "Wednesday: Season 2",
      thumbnail: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZEKsPYDwA-nwAf4_Sv-0VOXMnNeF5t8jvQVFjiiMWQOtMRkSPveQ9Blt4hqOPvK2QOScwP_-5eKD6eEeB-Avft8g83j6N1OX3eQNNrHbjFfhEKarc629f5wwks-1CR_QqrtJ9tKLCjwIfvpA5BTXarGc0A.jpg?r=57c",
    },

   {
      id:"qeVfT2iLiu0",
      title: "Coolie - Official Trailer",
      thumbnail: "https://static.moviecrow.com/marquee/coolie-nagarjuna-is-simon-in-rajinikanth-lokesh-kanagaraj-film/233570_thumb_665.jpg",
   },

   {
      id:"nsC5PhXS19Y",
      title: "Chhaava Teaser",
      thumbnail: "https://indiaglitz-media.s3.amazonaws.com/tamil/home/chhaava-review1322025m.jpg",
   },

   {
      id:"0f1sgQSdoDE",
      title: "Court",
      thumbnail: "https://i.ytimg.com/vi/0f1sgQSdoDE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzftxlSVWvXzZHE6MT2pnvYPc7IQ",
   },

   {
      id:"J1GvAIJBGFo",
      title: "Good Bad Ugly",
      thumbnail: "https://imagesvs.oneindia.com/img/2025/04/good-bad-ugly-review-01-1744223074.jpg",
   },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Next Watch</h1>

      {/*------------------Video Thumbnails------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col items-center cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-60 h-36 object-cover rounded-lg mb-2 shadow-lg hover:scale-105 transition-transform"
              onClick={() => setActiveVideo(video.id)}
            />
            <p className="text-white font-semibold">{video.title}</p>
          </div>
        ))}
      </div>

      {/*------------------Modal------------------*/}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-2xl shadow-xl p-4 w-[90%] max-w-3xl">
            {/*------------------Close Button------------------*/}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 transition"
            >
              X
            </button>

            {/*-------------YouTube Video-----------------*/}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[400px] rounded-xl"
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
