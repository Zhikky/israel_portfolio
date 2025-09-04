import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";
import MyPortfolio from "../Component/pages/portfolio/myPortfolio";
import ProfileCard from "../Component/composables/profileCard";
import ProjectCard from "../Component/composables/projectCard";
import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";

import analytics from "../assets/healthicons_integrated-data-and-research-24px.png";
import pen from "../assets/iconoir_design-nib.png";

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
          <div className="w-full max-w-[1440px] h-120"></div>

          {/* <div className="sticky top-0"> */}
          <div className="w-full flex flex-col items-center justify-center relative h-fit">
            <h1 className="sticky top-20 w-fit text-white font-vina-sans text-[12rem] tracking-tight leading-[180px] pb-[710px]">
              <div className="z-0 text-black tracking-normal absolute -left-[240px] top-[78px] rotate-[12deg] hover:rotate-0 cursor-pointer duration-200 ">
                <ProfileCard
                  role="Product Designer"
                  color="#9EE5FF"
                  icon={pen}
                />
              </div>
              My Portfolio
              <div className="z-20 text-black tracking-normal absolute right-[-200px] top-[78px] -rotate-[16deg] hover:rotate-0 cursor-pointer duration-200 ">
                <ProfileCard
                  role="UX Strategist"
                  color="#FFF0C1"
                  icon={analytics}
                />
              </div>
            </h1>
            {/* </div> */}

            <div className="-mt-[730px] w-full">
              <ProjectCard
                projectImage={project1}
                title="FUTURE X"
                highlight="UI/UX, EDUCATION, WEBAPP, VUEJS"
                year="2020"
                description="A learning & education management system to cater for the needs & flaws of the traditional education system"
                bgColor="#FFF0C1"
                topValue="255px"
              />
              <ProjectCard
                projectImage={project2}
                title="JETIFFY"
                highlight="UI/UX, Ride hailing, Goods Delivery, VueJs"
                year="2020"
                description="A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age."
                bgColor="#94E1CA"
                // topValue="380px"
                topValue="255px"
              />
              <ProjectCard
                projectImage={project3}
                title="REMINDR"
                highlight="UI/UX, Time Planning, Mobile app"
                year="2020"
                description="A time planning and tracking app for the average millenial."
                bgColor="#9EE5FF"
                topValue="255px"
              />
              <ProjectCard
                projectImage={project1}
                title="FUTURE X"
                highlight="UI/UX, EDUCATION, WEBAPP, VUEJS"
                year="2020"
                description="A learning & education management system to cater for the needs & flaws of the traditional education system"
                bgColor="#FFF0C1"
                topValue="255px"
              />
              <ProjectCard
                projectImage={project2}
                title="JETIFFY"
                highlight="UI/UX, Ride hailing, Goods Delivery, VueJs"
                year="2020"
                description="A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age."
                bgColor="#94E1CA"
                // topValue="380px"
                topValue="255px"
              />
              <ProjectCard
                projectImage={project3}
                title="REMINDR"
                highlight="UI/UX, Time Planning, Mobile app"
                year="2020"
                description="A time planning and tracking app for the average millenial."
                bgColor="#9EE5FF"
                topValue="255px"
              />
            </div>
          </div>

          {/* <div className="w-full h-screen  z-11 -mt-17"></div> */}

          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
