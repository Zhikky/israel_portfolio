export default function Footer({ handleCopy, showCopyPopup }) {
  return (
    <footer className="w-full bg-[#2E2E2E] flex justify-center z-50">
      <div className="flex justify-between w-full max-w-[1440px] p-38">
        <div className="flex flex-col w-7/10 gap-14">
          <p className="text-white text-2xl font-geist w-8/10">
            I am currently open to opportunities (remote, full-time, freelance
            or contract). Connect with me & let's push your billion-dollar idea
            to reality
          </p>

          <button
            onClick={handleCopy}
            className="border-4 relative border-solid border-[#94E1CA] rounded-3xl px-6 py-4 bg-[#94E1CA] flex items-center gap-2 w-fit cursor-pointer hover:bg-transparent duration-300 group hover:scale-101 active:scale-99"
          >
            <span className="font-vina-sans text-[68px] leading-none group-hover:text-[#94E1CA] text-black">
              adetuwoisrael24@gmail.com
            </span>
            <svg
              className="w-9 h-9"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2125 27.4116C43.5645 26.5614 43.5645 25.4807 43.5645 23.3233C43.5645 21.166 43.5645 20.0852 43.2125 19.2351C42.9797 18.6729 42.6385 18.1622 42.2083 17.732C41.7781 17.3018 41.2673 16.9605 40.7052 16.7278C39.855 16.3757 38.7743 16.3757 36.6169 16.3757H23.1849C20.5912 16.3757 19.2943 16.3757 18.3041 16.8801C17.4318 17.3243 16.7227 18.0334 16.2785 18.9057C15.7742 19.8938 15.7742 21.1907 15.7742 23.7865V37.2185C15.7742 39.3758 15.7742 40.4566 16.1262 41.3067C16.5976 42.441 17.4992 43.3447 18.6335 43.814C19.4837 44.1661 20.5644 44.1661 22.7218 44.1661C24.8791 44.1661 25.9598 44.1661 26.81 43.814M43.2125 27.4116C42.9797 27.9737 42.6385 28.4845 42.2083 28.9147C41.7781 29.3449 41.2673 29.6861 40.7052 29.9189C39.855 30.2709 38.7743 30.2709 36.6169 30.2709C34.4596 30.2709 33.3788 30.2709 32.5286 30.6229C31.9665 30.8557 31.4558 31.1969 31.0256 31.6271C30.5954 32.0573 30.2541 32.5681 30.0213 33.1302C29.6693 33.9804 29.6693 35.0611 29.6693 37.2185C29.6693 39.3758 29.6693 40.4566 29.3173 41.3067C29.0846 41.8689 28.7433 42.3796 28.3131 42.8098C27.8829 43.24 27.3721 43.5813 26.81 43.814M43.2125 27.4116C42.1051 31.23 40.0681 34.7142 37.2839 37.5522C34.4997 40.3903 31.0552 42.4937 27.2588 43.6741L26.81 43.814M34.3011 16.3757V14.5231C34.3011 11.9293 34.3011 10.6324 33.7967 9.64225C33.3531 8.77028 32.6447 8.06119 31.7732 7.61665C30.7809 7.1123 29.4841 7.1123 26.8903 7.1123H13.9215C11.3277 7.1123 10.0308 7.1123 9.04069 7.61665C8.16841 8.06084 7.45928 8.76997 7.01508 9.64225C6.51074 10.6304 6.51074 11.9272 6.51074 14.5231V27.4919C6.51074 30.0856 6.51074 31.3825 7.01508 32.3727C7.45973 33.2455 8.16787 33.9536 9.04069 34.3983C10.0288 34.9026 11.3277 34.9026 13.9235 34.9026H15.7742"
                stroke="#2E2E2E"
                stroke-width="3.08781"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="group-hover:stroke-[#94E1CA] duration-200"
              />
            </svg>

            {/* Popup */}
            {showCopyPopup && (
              <div className="absolute top-full -right-12 mt-2 px-2 py-1 bg-black text-white text-base rounded shadow-lg animate-fade">
                Copied!
              </div>
            )}
          </button>

          <p className="text-white text-2xl font-geist w-8/10">
            © 2025 Israel Adetuwo. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col items-left gap-14 w-39">
          <a
            href=""
            target="_blank"
            className="flex rounded-[28px] bg-white p-1 h-fit w-fit"
          >
            <div className="border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2 bg-[#9EE5FF]">
              <span className="font-vina-sans text-3xl leading-none">
                LinkedIn
              </span>
            </div>
          </a>
          <a
            href=""
            target="_blank"
            className="flex rounded-[28px] bg-white p-1 h-fit w-fit"
          >
            <div className="border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2 bg-[#FFF0C1]">
              <span className="font-vina-sans text-3xl leading-none">
                BEHANCE
              </span>
            </div>
          </a>
          <a
            href=""
            target="_blank"
            className="flex rounded-[28px] bg-white p-1 h-fit w-fit"
          >
            <div className="border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2 bg-[#F0BFFF]">
              <span className="font-vina-sans text-3xl leading-none">
                INSTAGRAM
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
