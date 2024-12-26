import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

import { useEffect, useState, useRef } from "react";
interface Wish {
  name: string;
  message: string;
}

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Tham chiếu đến phần tử audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-01-08T11:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const images = [
    "../public/07.jpg",
    "../public/08.jpg",
    "../public/14.jpg",
    "../public/15.jpg",
    "../public/23.jpg",
    "../public/24.jpg",
    "../public/33.jpg",
    "../public/34.jpg",
    "../public/39.jpg",
    "../public/40.jpg",
  ];

  // Lấy danh sách lời chúc từ API
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/wishes");
        setWishes(response.data);
      } catch (err) {
        console.error("Error fetching wishes:", err);
      }
    };
    fetchWishes();
  }, []);

  // Gửi form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      try {
        const response = await axios.post("http://localhost:5000/api/wishes", {
          name,
          message,
        });
        setWishes([response.data, ...wishes]); // Thêm lời chúc mới vào danh sách
        setName("");
        setMessage("");
      } catch (err) {
        console.error("Error saving wish:", err);
      }
    }
  };
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Header />
      <div className="fixed top-4 right-4 z-50">
        {" "}
        {/* Vị trí cố định ở góc trên bên phải */}
        <audio ref={audioRef} src="../public/EverytimeWeTouch.mp3" loop />
        <button
          onClick={toggleMusic}
          className={`p-3 rounded-full text-blue-700 font-semibold shadow-lg bg-amber-600`}
        >
          {isPlaying ? "🔊" : "🔈X"}
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4 py-8 sm:px-12 sm:py-16">
        {/* Hình 1 */}
        <div className="relative w-full max-w-sm h-[25rem] sm:w-96 sm:h-[30rem] overflow-hidden rounded-xl group">
          <img
            src="../public/14.jpg"
            alt="Bride"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-lg shadow-md group-hover:translate-y-0 translate-y-8 transition-all duration-500">
            <p
              className="text-xl sm:text-2xl font-bold"
              style={{
                fontFamily: "Times New Roman",
              }}
            >
              Anh Tuấn
            </p>
          </div>
        </div>

        {/* Hình 2 */}
        <div className="relative w-full max-w-sm h-[25rem] sm:w-96 sm:h-[30rem] overflow-hidden rounded-xl group">
          <img
            src="../public/13.jpg"
            alt="Groom"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-lg shadow-md group-hover:translate-y-0 translate-y-8 transition-all duration-500">
            <p
              className="text-xl sm:text-2xl font-bold"
              style={{
                fontFamily: "Times New Roman",
              }}
            >
              Thu Quỳnh
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div
          className="w-[80%] rounded-t-3xl shadow-lg p-8 mx-auto text-center relative bg-cover bg-center"
          style={{ backgroundImage: "url('../public/17.jpg')" }}
        >
          <h1 className="text-white">Cùng đếm ngược thời gian</h1>
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-6 animate-slide-up text-white"
            style={{ fontFamily: "Times New Roman" }}
          >
            SAVE THE DATE
          </h1>
          <div className="flex justify-center space-x-4 sm:space-x-6 text-lg sm:text-xl font-semibold text-white">
            <div>
              <span className="block text-3xl sm:text-4xl">
                {timeLeft.days}
              </span>{" "}
              Ngày
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl">
                {timeLeft.hours}
              </span>{" "}
              Giờ
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl">
                {timeLeft.minutes}
              </span>{" "}
              Phút
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl">
                {timeLeft.seconds}
              </span>{" "}
              Giây
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-lg px-8 py-8 text-center w-[95%] sm:w-[80%]">
          <img
            src="../public/27.jpg"
            alt="Wedding Couple"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-t-full mx-auto mb-6 object-cover"
          />
          <h2
            className="text-xl sm:text-2xl font-bold mb-2 text-gray-700"
            style={{
              fontFamily: "Times New Roman",
            }}
          >
            Tiệc Nhà Trai
          </h2>
          <p className="text-gray-700 mb-4">
            Nam Hưng, Vũ Lạc, TP Thái Bình, Thái Bình
          </p>
          <p className="font-semibold text-gray-700 text-base mb-6">
            Vào lúc 11:00
          </p>

          <div className="mt-6 flex justify-center items-center w-full relative">
            <div className="text-center mx-2 sm:mx-4">
              <div className="w-full border-t border-b border-gray-600 ">
                <p
                  className="text-sm sm:text-lg font-light"
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  Thứ Tư
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mx-2 sm:mx-4">
              <p
                className="text-4xl sm:text-6xl font-extrabold text-gray-800"
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                08/01
              </p>
            </div>

            <div className="text-center mx-2 sm:mx-4">
              <div className="w-full border-t border-b border-gray-600 ">
                <p
                  className="text-sm sm:text-lg font-light"
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  2025
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-500 mt-4">09/12 Âm Lịch</p>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-lg px-8 py-8 text-center w-[95%] sm:w-[80%]">
          <img
            src="../public/28.jpg"
            alt="Wedding Couple"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-t-full mx-auto mb-6 object-cover"
          />
          <h2
            className="text-xl sm:text-2xl font-bold mb-2 text-gray-700"
            style={{
              fontFamily: "Times New Roman",
            }}
          >
            Tiệc Nhà Gái
          </h2>
          <p className="text-gray-700 mb-4">
            Số 154, Ngõ 7A3, Thôn 6, Xã Trung Hà, Yên Lạc, Vĩnh Phúc
          </p>
          <p className="font-semibold text-gray-700 text-base mb-6">
            Vào lúc 15:00
          </p>

          <div className="mt-6 flex justify-center items-center w-full relative">
            <div className="text-center mx-2 sm:mx-4">
              <div className="w-full border-t border-b border-gray-600 ">
                <p
                  className="text-sm sm:text-lg font-light"
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  Thứ ba
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mx-2 sm:mx-4">
              <p
                className="text-4xl sm:text-6xl font-extrabold text-gray-800"
                style={{
                  fontFamily: "Times New Roman",
                }}
              >
                07/01
              </p>
            </div>

            <div className="text-center mx-2 sm:mx-4">
              <div className="w-full border-t border-b border-gray-600 ">
                <p
                  className="text-sm sm:text-lg font-light"
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  2025
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-500 mt-4">08/12 Âm Lịch</p>
        </div>
      </div>

      <div className="py-16">
        <h1
          className="text-amber-950 text-center font-semibold text-2xl sm:text-3xl pb-8"
          style={{ fontFamily: "Times New Roman" }}
        >
          ALBUM ẢNH
        </h1>
        <Swiper
          modules={[EffectCoverflow]} // Thêm hiệu ứng coverflow vào đây
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full sm:w-[80%] h-[20rem] sm:h-[40rem] rounded-lg mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Container */}
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full p-8 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center gap-6"
          style={{
            backgroundImage: "url('/public/17.jpg')",
            backgroundPosition: "top center",
            width: "100vw",
            height: "auto",
          }}
        >
          {/* Danh sách lời chúc */}
          <div
            className="shadow-md rounded-lg p-6 w-full max-w-4xl"
            style={{
              backgroundColor: "rgba(255, 221, 226, 0.7)",
              backdropFilter: "blur(5px)",
            }}
          >
            <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
              Gửi lời chúc đến cặp đôi
            </h3>
            <div
              className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 text-center rounded-lg"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h4 className="font-bold text-gray-800">{wish.name}</h4>
                  <p className="text-gray-600">{wish.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form gửi lời chúc */}
          <div
            className="shadow-md rounded-lg p-6 max-w-md w-full"
            style={{
              backgroundColor: "rgba(255, 221, 226, 0.7)",
              backdropFilter: "blur(5px)",
              fontFamily: "Times New Roman, serif",
            }}
          >
            <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
              Gửi lời chúc
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-xl text-gray-700 mb-1">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none  focus:ring-2 focus:ring-[#8B4513]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl text-gray-700 mb-1">
                  Lời nhắn gửi
                </label>
                <textarea
                  placeholder="Lời nhắn gửi"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none  focus:ring-2 focus:ring-[#8B4513]"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B4513] text-white rounded-lg p-2 hover:bg-[#6A3A11] transition"
              >
                Gửi lời chúc
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
