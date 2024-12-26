import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false); // Trạng thái kiểm tra chữ đã xuất hiện
  const footerRef = useRef(null); // Tham chiếu đến phần footer

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Khi footer xuất hiện trong viewport
        } else {
          setIsVisible(false); // Khi footer rời khỏi viewport
        }
      },
      { threshold: 0.5 } // Kích hoạt khi 50% footer xuất hiện
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Quan sát phần footer
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current); // Hủy quan sát
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/07.jpg')", // Đường dẫn đúng đến ảnh
        backgroundSize: "cover", // Phủ toàn bộ vùng nền
        backgroundPosition: "top", // Căn chỉnh ảnh từ trên xuống
        fontFamily: "Times New Roman, serif", // Phông chữ Times New Roman
        height: "100vh", // Chiều cao toàn màn hình
        position: "relative",
      }}
    >
      {/* Lời cảm ơn */}
      <h2
        className={`text-6xl font-bold transition-all duration-1000 ${
          isVisible ? "opacity-100 text-black" : "opacity-0 text-white"
        }`}
        style={{
          textShadow: isVisible ? "none" : "2px 2px 10px rgba(0, 0, 0, 0.😎",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        Thank you!
      </h2>
    </div>
  );
};

export default Footer;
