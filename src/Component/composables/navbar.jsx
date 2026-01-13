import { NavLink } from "react-router-dom";
import { useState } from "react";
import icon from "../../assets/Ellipse 1.png";

export default function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <div
    //   style={{
    //     backgroundColor: scrolled ? "#242424" : "#00000033",
    //     top: scrolled ? "18px" : "18px",
    //   }}
    //   className={`flex sticky z-50 justify-between items-center duration-300 py-4 px-6 rounded-4xl max-w-[1440px] w-8/10 h-24
    //  backdrop-blur-sm`}
    // >
    //   <NavLink to="/" className="text-white text-3xl font-vina-sans">
    //     ISRAEL ADETUWO
    //   </NavLink>
    //   <div className="flex space-x-4">
    //     <NavLink
    //       to="/"
    //       className={() =>
    //         `inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group`
    //       }
    //     >
    //       {({ isActive }) => (
    //         <>
    //           home
    //           <img
    //             src={icon}
    //             alt="icon"
    //             className={`absolute w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 ${
    //               isActive ? "opacity-100" : "opacity-0"
    //             }`}
    //           />
    //         </>
    //       )}
    //     </NavLink>
    //     <NavLink
    //       to="/about"
    //       className={() =>
    //         `inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group`
    //       }
    //     >
    //       {({ isActive }) => (
    //         <>
    //           about
    //           <img
    //             src={icon}
    //             alt="icon"
    //             className={`absolute w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 ${
    //               isActive ? "opacity-100" : "opacity-0"
    //             }`}
    //           />
    //         </>
    //       )}
    //     </NavLink>
    //     <NavLink
    //       to="/portfolio"
    //       className={() =>
    //         `inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group`
    //       }
    //     >
    //       {({ isActive }) => (
    //         <>
    //           portfolio
    //           <img
    //             src={icon}
    //             alt="icon"
    //             className={`absolute w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 ${
    //               isActive ? "opacity-100" : "opacity-0"
    //             }`}
    //           />
    //         </>
    //       )}
    //     </NavLink>

    //     {/* hiding contact button on Navbar */}
    //     {/* <a
    //       href="#footer"
    //       className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
    //     >
    //       contact
    //       <img
    //         src={icon}
    //         alt="icon"
    //         className="absolute opacity-0 w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 cursor-pointer"
    //       />
    //     </a> */}

    //     <a
    //       href="/IsraelAdetuwo'sResume.pdf"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
    //     >
    //       resume
    //       <img
    //         src={icon}
    //         alt="icon"
    //         className="absolute opacity-0 w-[66px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-60 cursor-pointer"
    //       />
    //     </a>
    //   </div>
    //   <a
    //     href="mailto:adetuwoisrael24@gmail.com"
    //     target="_blank"
    //     className="rounded-2xl py-6 px-8 bg-[#94E1CA] text-base leading-none cursor-pointer"
    //   >
    //     Get in touch
    //   </a>
    // </div>

    <div
      style={{
        backgroundColor: scrolled ? "#242424" : "#00000033",
        top: "18px",
      }}
      className={`flex sticky z-50 justify-between items-center duration-300 
        py-3 px-4 sm:py-4 sm:px-6 
        rounded-2xl sm:rounded-3xl lg:rounded-4xl 
        max-w-[1440px] w-[95%] sm:w-[90%] lg:w-[85%] xl:w-4/5
        h-16 sm:h-20 lg:h-24 
        backdrop-blur-sm`}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="text-white text-xl sm:text-2xl lg:text-3xl font-vina-sans z-50"
      >
        ISRAEL ADETUWO
      </NavLink>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:flex space-x-4">
        <NavLink
          to="/"
          className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
        >
          {({ isActive }) => (
            <>
              home
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
          to="/about"
          className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
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
          className="inline-flex w-[66px] items-center justify-center text-white text-base font-geist relative group"
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

      {/* Desktop CTA Button - Hidden on mobile */}
      <a
        href="mailto:adetuwoisrael24@gmail.com"
        target="_blank"
        className="hidden lg:inline-flex rounded-2xl py-6 px-8 bg-[#94E1CA] text-base leading-none cursor-pointer"
      >
        Get in touch
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#242424] transition-all duration-300 rounded-2xl h-125 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col mt-26 h-full space-y-8 px-6">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-geist relative group"
          >
            {({ isActive }) => (
              <>
                home
               <span
                  className={`absolute -bottom-2 left-0 w-full transition-all duration-300 ${
                    isActive ? "bg-[#94E1CA] h-0.5" : "bg-[#ffffff1a] h-0.25"
                  }`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-geist relative group"
          >
            {({ isActive }) => (
              <>
                about
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.25 transition-all duration-300 ${
                    isActive ? "bg-[#94E1CA]" : "bg-[#ffffff1a]"
                  }`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-geist relative group"
          >
            {({ isActive }) => (
              <>
                portfolio
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.25 transition-all duration-300 ${
                    isActive ? "bg-[#94E1CA]" : "bg-[#ffffff1a]"
                  }`}
                />
              </>
            )}
          </NavLink>
          <a
            href="/IsraelAdetuwo'sResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl font-geist relative"
          >
            resume
            <span
              className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#ffffff1a] transition-all duration-300`}
            />
          </a>
          <a
            href="mailto:adetuwoisrael24@gmail.com"
            target="_blank"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-2xl py-4 px-8 bg-[#94E1CA] text-base leading-none cursor-pointer mt-8 w-fit"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
