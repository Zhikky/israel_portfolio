import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigationType } from "react-router-dom";

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
import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
          <div
            style={{ backgroundColor: "#1A1A1A" }}
            className="flex flex-col items-center min-h-screen w-full  scroll-smooth"
          >
            <HeroSection />
            <LogoCarousels />
            <BeyoundTheScreen />
            <Leading />
            <Projects />
            <ProjectCard
              projectImage={project1}
              title="FUTURE X"
              highlight="UI/UX, EDUCATION, WEBAPP, VUEJS"
              year="2020"
              description="A learning & education management system to cater for the needs & flaws of the traditional education system"
              bgColor="#FFF0C1"
              topValue="115px"
            />
            <ProjectCard
              projectImage={project2}
              title="JETIFFY"
              highlight="UI/UX, Ride hailing, Goods Delivery, VueJs"
              year="2020"
              description="A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age."
              bgColor="#94E1CA"
              // topValue="380px"
              topValue="115px"
              paddingTop="100px"
            />
            <ProjectCard
              projectImage={project3}
              title="REMINDR"
              highlight="UI/UX, Time Planning, Mobile app"
              year="2020"
              description="A time planning and tracking app for the average millenial."
              bgColor="#9EE5FF"
              topValue="315px"
              paddingTop="200px"
            />
          </div>
          <Experiences />
          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
