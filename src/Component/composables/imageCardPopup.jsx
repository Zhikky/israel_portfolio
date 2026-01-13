
export default function ImageCardPopup({ hideImagePopup, imageData }) {
  return (
    <div
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center 
        bg-black/50 backdrop-blur-sm z-[9999] cursor-pointer
        p-4 sm:p-6 md:p-8"
      onClick={hideImagePopup}
    >
      {/* Close Button */}
      <button
        onClick={hideImagePopup}
        className="text-2xl p-2 sm:p-3 text-black bg-white rounded-full 
          mb-4 sm:mb-6 md:mb-10 
          hover:bg-[#94E1CA] cursor-pointer 
          hover:scale-105 hover:text-white
          transition-all duration-200
          active:scale-95"
        aria-label="Close popup"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Image Container */}
      <div
        className="relative w-full max-w-[70vw] md:max-w-[50vw]
          max-h-[60vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageData}
          alt="Portfolio item"
          className="w-full h-full 
            shadow-[0px_4px_20px_0px_#000000BF] sm:shadow-[0px_4px_35px_0px_#000000BF] 
            rounded-2xl sm:rounded-3xl lg:rounded-4xl 
            border-4 sm:border-6 border-white 
            object-cover
            cursor-default
            animate-fade-in"
        />
      </div>
    </div>
  );
}

