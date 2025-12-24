import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigationType, NavLink } from "react-router-dom";
import Portal from "../Component/composables/Portal";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";

// Importing page components
import HeroSection from "../Component/pages/home/heroSection";
import LogoCarousels from "../Component/pages/home/logoCarousels";
import BeyoundTheScreen from "../Component/pages/home/beyondTheScreen";
import Leading from "../Component/pages/home/leading";
import Projects from "../Component/pages/home/projects";
import Experiences from "../Component/pages/home/experiences";
import ProjectCard from "../Component/composables/projectCard";
import testGorillaImage from "../assets/projects/testGorillaProjectImage.png";
import secfixImage from "../assets/projects/secfixProjectImage.png";
import futurexImage from "../assets/projects/futurexProjectImage.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ImageCardPopup from "../Component/composables/imageCardPopup";
import ReferenceBoard from "../Component/pages/home/referencesBoard";
// ..
AOS.init();

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showCopyPopup, setshowCopyPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigationType = useNavigationType;

  useEffect(() => {
    if (navigationType === "POP") {
      // Direct load or refresh
      const timer = setTimeout(() => setLoading(false), 5000);
      return () => clearTimeout(timer);
    } else {
      // Navigation from another page
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [navigationType]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("adetuwoisrael24@gmail.com")
      .then(() => {
        setshowCopyPopup(true);
        setTimeout(() => setshowCopyPopup(false), 1000); // reset after 1s
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const displayImagePopup = (imageData) => {
    setSelectedImage(imageData);
    setShowImagePopup(true);
  };

  const hideImagePopup = () => {
    setShowImagePopup(false);
    setSelectedImage(null);
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
    if (showImagePopup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [showImagePopup]);

  return (
    <div className="relative">
      {/* Beyond The Screen image card popup */}
      {showImagePopup && (
        <Portal>
          <ImageCardPopup
            hideImagePopup={hideImagePopup}
            showImagePopup={showImagePopup}
            imageData={selectedImage}
          />
        </Portal>
      )}

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
        <div className="relative flex flex-col items-center w-full bg-[#1A1A1A] z-900">
          <Navbar scrolled={scrolled} />
          <div
            style={{ backgroundColor: "#1A1A1A" }}
            className="flex flex-col items-center min-h-screen w-full  scroll-smooth"
          >
            <HeroSection />
            <LogoCarousels />
            <BeyoundTheScreen displayImagePopup={displayImagePopup} />
            <Leading />
            <Projects />
            <ProjectCard
              projectImage={testGorillaImage}
              title="TESTGORILLA"
              path="testgorilla"
              description="Redesigning talent cards for a skills-based sourcing experience"
              tags={[
                {
                  text: "saas",
                  color: "#FFF0C1",
                },
                {
                  text: "sourcing",
                  color: "#9EE5FF",
                },
                {
                  text: "Redesign",
                  color: "#FFB05F",
                },
              ]}
              topValue="115px"
            />
            <ProjectCard
              projectImage={secfixImage}
              title="SECFIX"
              path="secfix"
              description="Automating Cybersecurity Compliance (Access Management Redesign)"
              tags={[
                {
                  text: "cyber security",
                  color: "#94E1CA",
                },
                {
                  text: "saas",
                  color: "#F0BFFF",
                },
                {
                  text: "0-1",
                  color: "#FFF0C1",
                },
              ]}
              topValue="270px"
              paddingTop="50px"
            />
            <ProjectCard
              projectImage={futurexImage}
              title="FUTUREX"
              path="futurex"
              description="A learning & education management system to cater for the needs & flaws of the traditional education system"
              tags={[
                {
                  text: "education",
                  color: "#FFF0C1",
                },
                {
                  text: "webapp",
                  color: "#9EE5FF",
                },
                {
                  text: "vuejs",
                  color: "#FFB05F",
                },
              ]}
              topValue="455px"
              paddingTop="50px"
            />
          </div>
          <NavLink
            to="/portfolio"
            className="mt-14 rounded-[50px] text-white border-2 border-white py-6 px-8 text-lg leading-none cursor-pointer w-fit font-geist font-semibold hover:scale-101 duration-200 hover:bg-white hover:text-black"
          >
            View more projects
          </NavLink>
          <Experiences />
          <ReferenceBoard />
          <Footer handleCopy={handleCopy} showCopyPopup={showCopyPopup} />
        </div>
      )}
    </div>
  );
}
