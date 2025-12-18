import { NavLink } from "react-router-dom";
import icon from "../../assets/Ellipse 1.png";

export default function Navbar({ scrolled }) {
  return (
    <div
      style={{
        backgroundColor: scrolled ? "#242424" : "#00000033",
        top: scrolled ? "18px" : "18px",
      }}
      className={`flex sticky z-50 justify-between items-center duration-300 py-4 px-6 rounded-4xl max-w-[1440px] w-8/10 h-24 
     backdrop-blur-sm`}
    >
      <NavLink to="/" className="text-white text-3xl font-vina-sans">
        ISRAEL ADETUWO
      </NavLink>
      <div className="flex space-x-4">
        <NavLink
          to="/about"
          className={() =>
            `inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group`
          }
        >
          {({ isActive }) => (
            <>
              about
              <img
                src={icon}
                alt="icon"
                className={`absolute w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
        <NavLink
          to="/portfolio"
          className={() =>
            `inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group`
          }
        >
          {({ isActive }) => (
            <>
              portfolio
              <img
                src={icon}
                alt="icon"
                className={`absolute w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
        <a
          href="#footer"
          className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
        >
          contact
          <img
            src={icon}
            alt="icon"
            className="absolute opacity-0 w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 cursor-pointer"
          />
        </a>
        <a
          href="/IsraelAdetuwo'sResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
        >
          resume
          <img
            src={icon}
            alt="icon"
            className="absolute opacity-0 w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 cursor-pointer"
          />
        </a>
      </div>
      <a
        href="mailto:adetuwoisrael24@gmail.com"
        target="_blank"
        className="rounded-2xl py-6 px-8 bg-[#94E1CA] text-base leading-none cursor-pointer"
      >
        Get in touch
      </a>
    </div>
  );
}
