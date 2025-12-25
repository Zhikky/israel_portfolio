import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

export default function ImageCardPopup({ hideImagePopup, imageData }) {
  return (
    <div
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-[9999] cursor-pointer"
      onClick={hideImagePopup}
    >
      <div className="text-2xl p-3 text-black bg-white rounded-full mb-10 hover:bg-[#94E1CA] cursor-pointer hover:scale-105 hover:text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <img
        src={imageData}
        alt=""
        className="w-137.5 h-162 shadow-[0px_4px_35px_0px_#000000BF] rounded-4xl border-6 border-white object-cover object-center cursor-pointer animate-tilt"
        data-aos="zoom-in"
        data-aos-duration="300"
        // data-aos-delay="100"
        // data-aos-mirror="true"
        data-aos-easing="ease-in-out"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
