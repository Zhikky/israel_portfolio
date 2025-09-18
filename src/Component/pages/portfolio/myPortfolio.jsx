import ProfileCard from "../../composables/profileCard";
import ProjectCard from "../../composables/projectCard";
import project1 from "../../../assets/projects/project1.webp";
import project2 from "../../../assets/projects/project2.webp";
import project3 from "../../../assets/projects/project3.webp";


import analytics from "../../../assets/healthicons_integrated-data-and-research-24px.png";
import pen from "../../../assets/iconoir_design-nib.png";


export default function MyPortfolio() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative h-fit ">
      <h1 className="sticky top-20 w-fit text-white font-vina-sans text-[12rem] tracking-tight leading-[180px] pb-[630px]">
        <div className="z-0 text-black tracking-normal absolute -left-[240px] top-[78px] rotate-[12deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="Product Designer" color="#9EE5FF" icon={pen} />
        </div>
        My Portfolio
        <div className="z-20 text-black tracking-normal absolute right-[-200px] top-[78px] -rotate-[16deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="UX Strategist" color="#FFF0C1" icon={analytics} />
        </div>
      </h1>
      {/* </div> */}

      <div className="-mt-[630px] w-full">
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
          topValue="255px"
          paddingTop="100px"
        />
        <ProjectCard
          projectImage={project3}
          title="REMINDR"
          highlight="UI/UX, Time Planning, Mobile app"
          year="2020"
          description="A time planning and tracking app for the average millenial."
          bgColor="#9EE5FF"
          topValue="255px"
          paddingTop="200px"
        />
        <ProjectCard
          projectImage={project1}
          title="FUTURE X"
          highlight="UI/UX, EDUCATION, WEBAPP, VUEJS"
          year="2020"
          description="A learning & education management system to cater for the needs & flaws of the traditional education system"
          bgColor="#FFF0C1"
          topValue="255px"
          paddingTop="300px"
        />
        <ProjectCard
          projectImage={project2}
          title="JETIFFY"
          highlight="UI/UX, Ride hailing, Goods Delivery, VueJs"
          year="2020"
          description="A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age."
          bgColor="#94E1CA"
          topValue="255px"
          paddingTop="400px"
        />
        <ProjectCard
          projectImage={project3}
          title="REMINDR"
          highlight="UI/UX, Time Planning, Mobile app"
          year="2020"
          description="A time planning and tracking app for the average millenial."
          bgColor="#9EE5FF"
          topValue="255px"
          paddingTop="500px"
        />
      </div>
    </div>
  )
}
