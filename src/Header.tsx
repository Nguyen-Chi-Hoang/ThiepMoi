const Header = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/07.jpg')", // Thay bằng đường dẫn ảnh của bạn
        }}
      ></div>

      {/* Nội dung */}
      <div className="relative bg-white bg-opacity-80 px-10 py-8 rounded-lg border border-white shadow-lg text-center text-black w-[500px] min-h-screen flex flex-col justify-center items-center">
        <p
          className="text-sm italic tracking-widest text-gray-500"
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Save The Date
        </p>
        <h1
          className="text-5xl font-semibold mt-2 leading-tight"
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Thu Quỳnh
        </h1>
        <p
          className="text-3xl mt-1 font-light text-gray-700"
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          &
        </p>
        <h1
          className="text-5xl font-semibold leading-tight"
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Anh Tuấn
        </h1>
        {/* Dòng kẻ giữa tên cô dâu chú rể và thời gian địa điểm tổ chức */}
        <hr className="my-8 border-t-2 border-gray-600 w-full" />{" "}
        {/* Màu dòng kẻ đã được thay đổi */}
        {/* Thời gian tổ chức */}
        <div className="mt-6 flex justify-between items-center w-full relative">
          {/* Thứ */}
          <div className="text-center">
            <div className="w-full border-t border-b border-gray-600 py-2">
              <p
                className="text-lg font-light"
                style={{ fontFamily: "Times New Roman" }}
              >
                Thứ Năm
              </p>
            </div>
          </div>

          {/* Ngày */}
          <div className="flex flex-col items-center mx-4">
            <p
              className="text-6xl font-extrabold text-gray-800"
              style={{ fontFamily: "Times New Roman" }}
            >
              8
            </p>
            <p
              className="text-2xl font-light text-gray-600"
              style={{ fontFamily: "Times New Roman" }}
            >
              1.2025
            </p>
          </div>

          {/* Giờ */}
          <div className="text-center">
            <div className="w-full border-t border-b border-gray-600 py-2">
              <p
                className="text-lg font-light"
                style={{ fontFamily: "Times New Roman" }}
              >
                11:00:00
              </p>
            </div>
          </div>
        </div>
        {/* Địa điểm tổ chức */}
        <p
          className="mt-8 text-sm italic text-gray-500"
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Địa điểm tổ chức
        </p>
        <p
          className="text-xl mt-2 font-semibold uppercase text-gray-800"
          style={{
            fontFamily: "Times New Roman",
            fontSize: "1.25rem", // Tăng kích thước font
          }}
        >
          Lễ Thành Hôn Tại Nhà Trai
        </p>
        <p
          className="text-sm mt-2 text-gray-600"
          style={{
            fontFamily: "Times New Roman",
          }}
        >
          Nam Hưng, Vũ Lạc, TP Thái Bình, Thái Bình
        </p>
        <hr className="my-8 border-t-2 border-gray-600 w-full" />{" "}
        {/* Màu dòng kẻ đã được thay đổi */}
      </div>
    </div>
  );
};

export default Header;
