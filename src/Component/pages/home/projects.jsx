// import project1 from "../../../assets/projects/project1.webp";
// import project2 from "../../../assets/projects/project2.webp";
// import project3 from "../../../assets/projects/project3.webp";
import ProfileCard from "../../composables/profileCard";
// import ProjectCard from "../../composables/projectCard";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center w-full pt-60    "
    >
      <div className="w-fit max-w-2xl relative -left-35">
        <div className="absolute right-[-140px] top-[-40px] rotate-[15deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="featured work" color="#94E1CA" />
        </div>
        <h1 className="font-vina-sans text-7xl tracking-tight text-[#FFF0C1]">
          my Recent Projects
        </h1>
      </div>
      {/* 
      <div className="flex flex-col w-full h-266 gap-5 mt-[-4px] relative overflow-y-auto scroll-smooth no-scrollbar">
        <ProjectCard
          projectImage={project1}
          title="FUTURE X"
          highlight="UI/UX, EDUCATION, WEBAPP, VUEJS"
          year="2020"
          description="A learning & education management system to cater for the needs & flaws of the traditional education system"
          bgColor="#FFF0C1"
          topValue="0px"
        />
        <ProjectCard
          projectImage={project2}
          title="JETIFFY"
          highlight="UI/UX, Ride hailing, Goods Delivery, VueJs"
          year="2020"
          description="A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age."
          bgColor="#94E1CA"
          topValue="220px"
        />
        <ProjectCard
          projectImage={project3}
          title="REMINDR"
          highlight="UI/UX, Time Planning, Mobile app"
          year="2020"
          description="A time planning and tracking app for the average millenial."
          bgColor="#9EE5FF"
          topValue="0px"
        />
      </div>

      <button
        style={{ backgroundColor: "#2E2E2E" }}
        className="mt-18 rounded-2xl py-6 px-8 self-center text-base text-white leading-none cursor-pointer w-fit font-geist font-semibold"
      >
        View my portfolio
      </button> */}
    </section>
  );
}
