import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

// Importing composable components
import Navbar from "./Component/composables/navbar";
import Footer from "./Component/composables/footer";

// Importing page components
import HeroSection from "./Component/pages/home/heroSection";
import LogoCarousels from "./Component/pages/home/logoCarousels";
import BeyoundTheScreen from "./Component/pages/home/beyondTheScreen";
import Leading from "./Component/pages/home/leading";
import Projects from "./Component/pages/home/projects";
import Experiences from "./Component/pages/home/experiences";


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Home() {
  // const plugins = [
  //   new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),
  // ];

  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

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
    // Simulate loading delay OR wait for assets/components
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

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
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className="flex flex-col items-center min-h-screen w-full"
        >
          <Navbar scrolled={scrolled} />
          <HeroSection />
          <LogoCarousels />
          <BeyoundTheScreen />
          <Leading />
          <Projects />

          <Experiences />
          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
