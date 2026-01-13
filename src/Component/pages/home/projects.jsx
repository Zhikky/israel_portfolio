// import project1 from "../../../assets/projects/project1.webp";
// import project2 from "../../../assets/projects/project2.webp";
// import project3 from "../../../assets/projects/project3.webp";
import ProfileCard from "../../composables/profileCard";
// import ProjectCard from "../../composables/projectCard";

export default function Projects() {
  return (
    <section className="flex items-center w-full max-w-[1142px] pt-20 sm:pt-32 md:pt-44 lg:pt-60 -mb-1 md:-mb-2 px-[36px] sm:px-8 md:px-0">
      <div className="w-full lg:w-fit relative">
        <div className="absolute right-[20px] -top-[40px] md:right-[-140px] md:top-[-40px] rotate-[15deg] hover:rotate-0 cursor-pointer duration-200">
          <ProfileCard role="featured work" color="#94E1CA" />
        </div>
        <h1 className="font-vina-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] tracking-tight leading-none text-[#FFF0C1]">
          my Recent Projects
        </h1>
      </div>
    </section>
  );
}