export default function Navbar({scrolled}) {
    return (
      <div
        style={{
          backgroundColor: scrolled ? "#242424" : "#00000033",
          top: scrolled ? "18px" : "72px",
        }}
        className={`flex sticky  z-50 justify-between items-center duration-600 py-4 px-6 rounded-4xl max-w-[1440px] w-8/10 h-24 
     backdrop-blur-sm`}
      >
        <div className="text-white text-3xl font-vina-sans">ISRAEL ADETUWO</div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white text-base font-geist hover:underline"
          >
            about
          </a>
          <a
            href="#"
            className="text-white text-base font-geist hover:underline"
          >
            porfolio
          </a>
          <a
            href="#"
            className="text-white text-base font-geist hover:underline"
          >
            contact
          </a>
          <a
            href="#"
            className="text-white text-base font-geist hover:underline"
          >
            resume
          </a>
        </div>
        <button className="rounded-2xl py-6 px-8 bg-[#94E1CA] text-base leading-none cursor-pointer">
          Get in touch
        </button>
      </div>
    );
}