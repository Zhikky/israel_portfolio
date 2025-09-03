import { useState, useEffect } from "react";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";
import AboutHeroSection from "../Component/pages/about/aboutHeroSection";
import Travels from "../Component/pages/about/travels";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import OpenToThoughts from "../Component/pages/about/openToThoughts";

// ..
AOS.init();

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <div>
      <div className="relative flex flex-col items-center w-full bg-[#1A1A1A]">
        <Navbar scrolled={scrolled} />
        <AboutHeroSection />

        <div className="w-full max-w-[1440px]">
          <Travels />
        </div>

        <OpenToThoughts />
        <Footer handleCopy={handleCopy} showPopup={showPopup} />
      </div>
    </div>
  );
}
