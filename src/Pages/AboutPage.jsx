import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";
import AboutHeroSection from "../Component/pages/about/aboutHeroSection";
import Travels from "../Component/pages/about/travels";

// import { useNavigationType } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import OpenToThoughts from "../Component/pages/about/openToThoughts";

// ..
AOS.init();

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("adetuwoisrael24@gmail.com")
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1000); // reset after 1s
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [mobileMenuOpen]);

  return (
    <div>
      {loading ? (
        <div className="loader-container w-full h-screen flex justify-center items-center bg-[#1A1A1A]">
          <ClipLoader
            color="#94E1CA"
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="relative flex flex-col items-center w-full bg-[#1A1A1A]">
          <Navbar
            scrolled={scrolled}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {mobileMenuOpen && (
            <div className="fixed z-50 w-full h-screen back  bg-black/30 backdrop-blur-md "></div>
          )}
          <AboutHeroSection />

          <div className="w-full max-w-[1440px]">
            <Travels />
          </div>

          <OpenToThoughts />
          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
