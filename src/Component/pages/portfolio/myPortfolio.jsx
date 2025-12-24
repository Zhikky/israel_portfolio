import ProfileCard from "../../composables/profileCard";
import ProjectCard from "../../composables/projectCard";
import testGorillaImage from "../../../assets/projects/testGorillaProjectImage.png";
import secfixImage from "../../../assets/projects/secfixProjectImage.png";
import futurexImage from "../../../assets/projects/futurexProjectImage.png";
import jettifyImage from "../../../assets/projects/jettifyProjectImage.png";
import zennorImage from "../../../assets/projects/zennorProjectImage.png";

import analytics from "../../../assets/healthicons_integrated-data-and-research-24px.png";
import pen from "../../../assets/iconoir_design-nib.png";

export default function MyPortfolio() {
  return (
    <div className="w-full flex flex-col pt-28 items-center justify-center relative h-fit ">
      <h1 className="-mb-4 relative text-center w-fit text-white font-vina-sans text-[12rem] tracking-tight leading-[180px]">
        <div className="z-0 text-black tracking-normal absolute -left-55 top-[78px] rotate-[12deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="Product Designer" color="#9EE5FF" icon={pen} />
        </div>
        My Portfolio
        <div className="z-20 text-black tracking-normal absolute -right-55 top-[78px] -rotate-[16deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="UX Strategist" color="#FFF0C1" icon={analytics} />
        </div>
      </h1>
      {/* </div> */}


        <ProjectCard
          projectImage={testGorillaImage}
          title="TESTGORILLA"
          path="testgorilla"
          description="Redesigning talent cards for a skills-based sourcing experience"
          tags={[
            {
              text: "sass",
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
          paddingTop="50px"
        />
        <ProjectCard
          projectImage={jettifyImage}
          title="JETIFFY"
          path="jettify"
          description="A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age."
          tags={[
            {
              text: "ride hailing",
              color: "#F0BFFF",
            },
            {
              text: "goods delivery",
              color: "#FFB05F",
            },
            {
              text: "mobile",
              color: "#86FF71",
            },
          ]}
          paddingTop="50px"
        />
        <ProjectCard
          projectImage={zennorImage}
          title="ZENNOR ENERGY"
          path="zennor-energy"
          description="A B2B solution for gasoline distribution and record keeping."
          tags={[
            {
              text: "gasoline",
              color: "#F0BFFF",
            },
            {
              text: "energy",
              color: "#94E1CA",
            },
            {
              text: "mobile",
              color: "#C5F9FA",
            },
          ]}
          
          paddingTop="50px"
        />
      
    </div>
  );
}
