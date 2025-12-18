import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";
import MyPortfolio from "../Component/pages/portfolio/myPortfolio";
import UxResearch from "../Component/pages/portfolio/uxResearch";
import AOS from "aos";
import "aos/dist/aos.css";

// ..
AOS.init();

export default function PortfolioPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

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
          <Navbar scrolled={scrolled} />
          
          <MyPortfolio />

          <UxResearch />

          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
