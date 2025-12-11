// import project1 from "../../../assets/projects/project1.webp";
// import project2 from "../../../assets/projects/project2.webp";
// import project3 from "../../../assets/projects/project3.webp";
import ProfileCard from "../../composables/profileCard";
// import ProjectCard from "../../composables/projectCard";

export default function Projects() {
  return (
    <section className="flex items-center w-full max-w-[1142px] pt-60 -mb-2">
      <div className="w-fit relative">
        <div className="absolute right-[-140px] top-[-40px] rotate-[15deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="featured work" color="#94E1CA" />
        </div>
        <h1 className="font-vina-sans text-[100px] tracking-tight leading-none text-[#FFF0C1]">
          my Recent Projects
        </h1>
      </div>
    </section>
  );
}
