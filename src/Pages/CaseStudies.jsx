import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";
import TitleSection from "../Component/pages/project/titleSection";
import DescriptionSection from "../Component/pages/project/descriptionSection";

import pen from "../assets/iconoir_design-nib.png";
import projects from "../studies";

import AOS from "aos";
import "aos/dist/aos.css";
import OverviewSection from "../Component/pages/project/overviewSection";
import ProblemStatement from "../Component/pages/project/problemStatement";
import ResearchProcess from "../Component/pages/project/researchProcess";
import MajorInsights from "../Component/pages/project/majorInsights";
import CompetitorAnalysis from "../Component/pages/project/comptetitorAnalysis";
import InformationArchitecture from "../Component/pages/project/informationArchitecture";
import WireFrames from "../Component/pages/project/wireframes";
import Snapshots from "../Component/pages/project/snapshots";
import MarketFit from "../Component/pages/project/marketFit";
import V2Designs from "../Component/pages/project/v2Designs";
import DesignSystems from "../Component/pages/project/designSystems";
import TakeAway from "../Component/pages/project/takeAway";
import Pagination from "../Component/pages/project/pagination";

// ..
AOS.init();

export default function CaseStudies() {
  const params = useParams();

  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((project) => {
      return project.projectName.toLowerCase() === params.caseStudyId;
    });

    console.log(foundProject);

    if (foundProject) {
      setData(foundProject);
    }
  }, [params.caseStudyId]);

  console.log(data);

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

          <TitleSection title={data.projectName} />

          <DescriptionSection pen={pen} />

          <OverviewSection />

          <ProblemStatement />

          <ResearchProcess />

          <MajorInsights />

          <CompetitorAnalysis />

          <InformationArchitecture />

          <WireFrames />

          <Snapshots />

          <MarketFit />

          <V2Designs />

          <DesignSystems/>

          <TakeAway/>

          <Pagination />



          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
