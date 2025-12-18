import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

// Importing composable components
import Navbar from "../Component/composables/navbar";
import Footer from "../Component/composables/footer";
import TitleSection from "../Component/pages/project/titleSection";
import DescriptionSection from "../Component/pages/project/descriptionSection";

import projects from "../studies";

import AOS from "aos";
import "aos/dist/aos.css";
import OverviewSection from "../Component/pages/project/overviewSection";
import ProblemStatement from "../Component/pages/project/problemStatement";
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
import RoleCollab from "../Component/pages/project/role";
import ResearchFoundation from "../Component/pages/project/researchFoundation";
import EarlyConceptDevelopment from "../Component/pages/project/earlyConceptDevelopment";
import QualitativeResearch from "../Component/pages/project/qualitativeResearch";
import QuantitativeResearch from "../Component/pages/project/quantitativeResearch";
import FinalDesignSystem from "../Component/pages/project/finalDesignSystem";
import FinalImpact from "../Component/pages/project/finalImpact";
import Reflections from "../Component/pages/project/reflections";
import InitialApproach from "../Component/pages/project/initialApproach";
import ResearchPivot from "../Component/pages/project/researchPivot";
import UsabilityTestingResults from "../Component/pages/project/usabilityTestingResults";
import FutureXConclusion from "../Component/pages/project/futureXConclusion";
import ResearchProcess from "../Component/pages/project/researchProcess";
import OnboardingScreens from "../Component/pages/project/Jettify/onboardingScreens";
import LoginSignupScreens from "../Component/pages/project/Jettify/loginSignupScreens";
import DarkMode from "../Component/pages/project/Jettify/darkMode";
import ImportantScreens from "../Component/pages/project/Jettify/importantScreens";
import OtherScreens from "../Component/pages/project/Jettify/otherScreens";
import ProjectDuration from "../Component/pages/project/Zennor/projectDuration";
import WhatIDId from "../Component/pages/project/Zennor/whatIDid";
import UserResearch from "../Component/pages/project/Zennor/userResearch";
import UserFlow from "../Component/pages/project/Zennor/userFlow";
import HighFidelity from "../Component/pages/project/Zennor/highFidelity";
import StyleGuide from "../Component/pages/project/Zennor/styleGuide";
import MediumFidelity from "../Component/pages/project/Zennor/mediumFidelity";

// ..
AOS.init();

export default function CaseStudies() {
  const params = useParams();

  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState();
  const [prevPageContent, setPrevPageContent] = useState(null);
  const [nextPageContent, setNextPageContent] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((project) => {
      return project.path.toLowerCase() === params.caseStudyId;
    });

    const prevPage = currentPage - 2;

    if (foundProject) {
      setData(foundProject);
      setCurrentPage(foundProject.id);

      if (currentPage <= projects.length) {
        setNextPageContent(projects[currentPage]);
      } else {
        setNextPageContent(null);
      }

      if (currentPage > 1) {
        setPrevPageContent(projects[prevPage]);
      } else {
        setPrevPageContent(null);
      }
    }
  }, [params.caseStudyId, currentPage]);

  console.log("Next page content:" + nextPageContent);
  console.log("Prev page content:" + prevPageContent);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [params.caseStudyId]);

  // Handle diplay of "Copied" popup when the footer email is clicked
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

          <TitleSection title={data.projectName} img={data.img} />

          <DescriptionSection
            description={data.description}
            role={data.role}
            theme={data.theme}
            tools={data.tools}
            research={data.research}
            timeline={data.timeline}
          />

          {data.coverImage && (
            <img
              className="w-full h-fit max-w-[840px] mt-36.5"
              src={data.coverImage}
            />
          )}

          {data.overview && <OverviewSection overview={data.overview} />}

          {data.problem && <ProblemStatement problem={data.problem} />}

          {data.projectName == "Zennor Energy" && <ProjectDuration />}

          {data.projectName == "Zennor Energy" && <WhatIDId />}

          {data.researchProcess && (
            <ResearchProcess researchProcess={data.researchProcess} />
          )}

          {data.roleCollab && <RoleCollab roleCollab={data.roleCollab} />}

          {data.initialApproach && (
            <InitialApproach initialApproach={data.initialApproach} />
          )}

          {data.researchPivot && (
            <ResearchPivot researchPivot={data.researchPivot} />
          )}

          {data.researchFoundation && (
            <ResearchFoundation researchFoundation={data.researchFoundation} />
          )}

          {data.conceptDevelopment && (
            <EarlyConceptDevelopment
              conceptDevelopment={data.conceptDevelopment}
            />
          )}

          {data.qualitativeResearch && (
            <QualitativeResearch
              qualitativeResearch={data.qualitativeResearch}
            />
          )}

          {data.quantitativeResearch && (
            <QuantitativeResearch
              quantitativeResearch={data.quantitativeResearch}
            />
          )}

          {data.finalDesignSystem && (
            <FinalDesignSystem finalDesignSystem={data.finalDesignSystem} />
          )}

          {data.usabilityTesting && (
            <UsabilityTestingResults usabilityTesting={data.usabilityTesting} />
          )}

          {data.finalImpact && <FinalImpact finalImpact={data.finalImpact} />}

          {data.reflections && <Reflections reflections={data.reflections} />}

          {data.conclusion && <TakeAway conclusion={data.conclusion} />}

          {data.projectName == "FutureX" && <MajorInsights />}

          {data.projectName == "FutureX" && <CompetitorAnalysis />}

          {data.informationArchitecture && (
            <InformationArchitecture
              informationArchitecture={data.informationArchitecture}
            />
          )}

          {data.projectName == "Zennor Energy" && <UserResearch />}

          {data.projectName == "Zennor Energy" && <UserFlow />}

          {data.wireFrames && <WireFrames wireFrames={data.wireFrames} />}

          {data.projectName == "FutureX" && <Snapshots />}

          {data.projectName == "FutureX" && <MarketFit />}

          {data.projectName == "FutureX" && <V2Designs />}

          {data.projectName == "FutureX" && <DesignSystems />}

          {data.projectName == "FutureX" && <FutureXConclusion />}

          {data.projectName == "Jettify" && <OnboardingScreens />}

          {data.projectName == "Jettify" && <LoginSignupScreens />}

          {data.projectName == "Jettify" && <ImportantScreens />}

          {data.projectName == "Jettify" && <OtherScreens />}

          {data.projectName == "Jettify" && <DarkMode />}

          {data.projectName == "Zennor Energy" && <MediumFidelity />}

          {data.projectName == "Zennor Energy" && <StyleGuide />}

          {data.projectName == "Zennor Energy" && <HighFidelity />}

          <Pagination
            prevPageContent={prevPageContent}
            nextPageContent={nextPageContent}
          />

          <Footer handleCopy={handleCopy} showPopup={showPopup} />
        </div>
      )}
    </div>
  );
}
