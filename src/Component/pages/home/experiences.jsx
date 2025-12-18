import ExperienceCard from "../../composables/experienceCard";
import ProfileCard from "../../composables/profileCard";
import testGorilla from "../../../assets/brandIcons/Frame 1618869165.png";
import designLab from "../../../assets/brandIcons/Frame 1618869169.png";
import secfix from "../../../assets/brandIcons/Frame 1618869165 (1).png";
import techPlus from "../../../assets/brandIcons/Frame 1618869165 (2).png";
import jettify from "../../../assets/brandIcons/Frame 1618869165 (3).png";
import vencru from "../../../assets/brandIcons/Frame 1618869165 (4).png";
import kinnra from "../../../assets/brandIcons/kinnraLogo.png";

export default function Experiences() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full mt-30 py-60 px-38 min-h-300 bg-[#1A1A1A] z-0">
      <div className="w-fit relative">
        <div className="absolute left-[-75px] top-[-52px] rotate-[-7.9deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="EXPERIENCE" color="#FFB05F" />
        </div>
        <h1 className="font-vina-sans text-7xl/14 tracking-tight text-[#FFF0C1] w-7/10">
          over the years i’ve built ambitious startups
        </h1>
      </div>

      <div className="flex flex-col z-10 w-full mt-[-4px] rounded-3xl overflow-hidden">
        <ExperienceCard
          company="Testgorilla , Amsterdam"
          role="Product Designer  | 2022 - Present"
          description="I designed the V2 of the Code-runner which increased candidate satisfaction by 20% over 3 months. I’m currently designing the experience for the Candidate Environment of the TG WebApp. "
          logo={testGorilla}
          bgColor="#D410AA"
        />
        <ExperienceCard
          company="Kinnra"
          companyFormer="Formerly Immigration Brief"
          role="CPO (Chief Product Officer)  | 2024 - Present"
          description="Leading the design and product teams of a travel/immigration based solution aimed at lowering the knowledge and access barrier travelers encounter."
          logo={kinnra}
          bgColor="#283593"
        />
        <ExperienceCard
          company="DesignLab , USA"
          role="UX Design Mentor | 2022 - Present"
          description="Mentor newbie or junior level designers in the various aspects of UI Design, UX Design, UX Research and Product Strategy to aid them build their design portfolios using test projects and land their first jobs"
          logo={designLab}
          bgColor="#F5F1E7"
          color="#000000"
        />
        <ExperienceCard
          company="SEcfix , Berlin"
          role="Founding Product Designer  | 2021 - 2023"
          description="Was involved in the research, strategy and headed design for a B2B SaaS product that grew from € 0 to € 150k ARR in 12 months"
          logo={secfix}
          bgColor="#5A00EB"
        />
        <ExperienceCard
          company="Teckplus Digital Soln., Lagos"
          role="Lead Designer  | 2020 - 2021"
          description="Was involved in the research, strategy and headed design for a B2B SaaS product that grew from € 0 to € 150k ARR in 12 months"
          logo={techPlus}
          bgColor="#30A8E6"
        />
        <ExperienceCard
          company="Jettify Limited, Lagos"
          role="UX Designer (Contract) | 2020 - 2021"
          description="Conducted quantitative and qualitative research, used results to create wireframes and hi-fidelity prototypes following usability tests.  Collaborated with developers to ensure consistency, functionality and adherence"
          logo={jettify}
          bgColor="#0CC591"
        />
        <ExperienceCard
          company="vencru hq, USA"
          role="Product Designer  | 2022 - Present"
          logo={vencru}
          bgColor="#2C74DA"
        />
      </div>
    </section>
  );
}
