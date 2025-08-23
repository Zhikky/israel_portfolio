import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "@egjs/react-flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";

// Importing components
import ProfileCard from "./Component/profileCard";
import ProjectCard from "./Component/projectCard";
import ExperienceCard from "./Component/experienceCard";

// Importing Image assets
import IsraelBackground from "./assets/IMG-20250813-WA0030 1.webp";
import arrow from "./assets/Vector 1.png";
import designer from "./assets/iconoir_design-nib.png";
import church from "./assets/ic_round-church.png";
import strategist from "./assets/healthicons_integrated-data-and-research-24px.png";
import brandLogo1 from "./assets/brands/Frame 41.png";
import brandLogo2 from "./assets/brands/Frame 42.png";
import brandLogo3 from "./assets/brands/Frame 43.png";
import brandLogo4 from "./assets/brands/Frame 44.png";
import brandLogo5 from "./assets/brands/Frame 45.png";
import brandLogo6 from "./assets/brands/image 4.png";
import israel1 from "./assets/18be830661ed38528e74a7c1ac279a63736c64ca (1).webp";
import israel2 from "./assets/65b0f40f48044f6dc52e517b9c124df3f252bc73.webp";
import israel3 from "./assets/41330c92237b8efcc5c7f5f56da8493863b6d195.webp";
import israel4 from "./assets/fb70702dfaeea44778fee3b338cddc65fe0129b0.webp";
import preaching from "./assets/Group 9 (1).webp";
import youtube from "./assets/youtube_logo.png";
import project1 from "./assets/projects/project1.webp";
import project2 from "./assets/projects/project2.webp";
import project3 from "./assets/projects/project3.webp";

import testGorilla from "./assets/brandIcons/Frame 1618869165.png";
import designLab from "./assets/brandIcons/Frame 1618869169.png";
import secfix from "./assets/brandIcons/Frame 1618869165 (1).png";
import techPlus from "./assets/brandIcons/Frame 1618869165 (2).png";
import jettify from "./assets/brandIcons/Frame 1618869165 (3).png";
import vencru from "./assets/brandIcons/Frame 1618869165 (4).png";

import { AutoPlay } from "@egjs/flicking-plugins";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Home() {
  const plugins = [
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),
  ];

  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

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
    window.addEventListener("load", () => setLoading(false));
  }, []);

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
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className="flex flex-col items-center min-h-screen w-full"
        >
          <div
            style={{
              backgroundColor: scrolled ? "#242424" : "#00000033",
              top: scrolled ? "18px" : "72px",
            }}
            className={`flex sticky  z-50 justify-between items-center duration-600 py-4 px-6 rounded-4xl max-w-[1440px] w-8/10 h-24 
     backdrop-blur-sm`}
          >
            <div className="text-white text-3xl font-vina-sans">
              ISRAEL ADETUWO
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white text-base font-geist hover:underline"
              >
                about
              </a>
              <a
                href="#"
                className="text-white text-base font-geist hover:underline"
              >
                porfolio
              </a>
              <a
                href="#"
                className="text-white text-base font-geist hover:underline"
              >
                contact
              </a>
              <a
                href="#"
                className="text-white text-base font-geist hover:underline"
              >
                resume
              </a>
            </div>
            <button className="rounded-2xl py-6 px-8 bg-[#94E1CA] text-base leading-none cursor-pointer">
              Get in touch
            </button>
          </div>
          <div
            className=" flex justify-center w-full relative mt-[-96px]"
            style={{
              backgroundImage: `url(${IsraelBackground})`,
              backgroundSize: "cover",
              height: "942px",
            }}
          >
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#1A1A1A] to-transparent "></div>

            <div className="relative max-w-[1440px] h-full  px-36 pt-16 pb-38 flex flex-col items-center justify-end ">
              <div className="flex justify-between z-1 w-full flex-wrap relative">
                <h1 className="text-[183px] text-[#fff] font-vina-sans leading-35">
                  Israel<br></br> Adetuwo
                </h1>

                <div className="flex flex-col w-2/5">
                  <p className="text-white text-base font-geist font-medium leading-5">
                    I’m Israel, a product designer with 7+ years of experience
                    turning complex problems into intuitive experiences. I also
                    pastor a small but vibrant community and recently began
                    exploring product coaching as a new way to build people.
                  </p>
                  <p className="text-white text-base font-geist font-medium leading-5 mt-4">
                    When I’m not designing or teaching, you’ll find me
                    mentoring, planning my next trip, or pushing myself at the
                    gym. I believeh that clarity, craft, and conviction should
                    guide how we live and work.
                  </p>
                  <button className=" flex items-center gap-2.5 mt-6 rounded-2xl py-6 px-8 bg-[#fff] text-base leading-none cursor-pointer w-fit font-geist font-semibold">
                    Get to know me
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                  </button>
                </div>

                <div className="absolute top-[-50px] left-[-92px] rotate-[-8deg] hover:rotate-0 cursor-pointer duration-200 ">
                  <ProfileCard
                    icon={designer}
                    role="Product Designer"
                    color="#CF94E1"
                  />
                </div>

                <div className="absolute rotate-[-4.29deg] bottom-[-92px] left-[389px] hover:rotate-0 cursor-pointer duration-200">
                  <ProfileCard icon={church} role="Pastor" color="#94E1CA" />
                </div>

                <div className="absolute rotate-[-17.49deg] right-[-85px] top-[200px] hover:rotate-0 cursor-pointer duration-200">
                  <ProfileCard
                    icon={strategist}
                    role="UX Strategist"
                    color="#FFF0C1"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="mt-18 px-37 py-43 max-w-[1440px] h-1 w-full z-0">
            <Flicking plugins={plugins} circular={true}>
              <img src={brandLogo1} alt="test" className="panel w-[17%] mx-4" />
              <img src={brandLogo2} alt="test" className="panel w-[17%] mx-4" />
              <img src={brandLogo3} alt="test" className="panel w-[17%] mx-4" />
              <img src={brandLogo4} alt="test" className="panel w-[17%] mx-4" />
              <img src={brandLogo5} alt="test" className="panel w-[17%] mx-4" />
              <img src={brandLogo6} alt="test" className="panel w-[17%] mx-4" />
            </Flicking>
          </section>
          <section className="flex flex-col items-center justify-center max-w-[1440px] w-full pt-67 pb-48 px-37 min-h-56">
            <h1 className="font-vina-sans text-7xl tracking-tight text-white">
              Beyond The Screen
            </h1>

            <div className="flex flex-col text-white items-center mt-17 w-full overflow-hidden">
              <div className="flex w-10/12 justify-between items-center">
                <p
                  className="w-66 text-[#FFF0C1] text-xl font-covered-by-your-grace"
                  data-aos="fade-in"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                >
                  My faith shapes how I lead, create, and care for people. I
                  believe in building things that matter—and serving people
                  while at it.
                </p>
                <p
                  className="w-66 text-[#FFF0C1] text-xl font-covered-by-your-grace"
                  data-aos="fade-in"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                >
                  Travel gives me perspective. Exploring new places challenges
                  me to stay curious and think bigger.
                </p>
              </div>

              <div className="relative w-full min-h-[270px] group bg-red left-5/13">
                <img
                  src={israel4}
                  alt=""
                  className="w-60 h-71 shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover absolute"
                  data-aos="israel-1"
                  data-aos-duration="500"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                  data-aos-easing="ease-in-out"
                />

                <img
                  src={israel3}
                  alt=""
                  className="w-60 h-71 shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover absolute"
                  data-aos="israel-2"
                  data-aos-duration="500"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                  data-aos-easing="ease-in-out"
                />
                <img
                  src={israel2}
                  alt=""
                  className="w-60 h-71 shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover absolute"
                  data-aos="israel-3"
                  data-aos-duration="500"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                  data-aos-easing="ease-in-out"
                />
                <img
                  src={israel1}
                  alt=""
                  className="w-60 h-71  shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover object-left absolute"
                  data-aos="israel-4"
                  data-aos-duration="500"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                  data-aos-easing="ease-in-out"
                />
              </div>

              <div className="flex w-8/12 justify-between items-center mt-20 ml-90">
                <p
                  className="w-66 text-[#FFF0C1] text-xl justify-self-center font-covered-by-your-grace"
                  data-aos="fade-in"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                >
                  I stay consistent with fitness because it keeps me grounded,
                  focused, and mentally strong.
                </p>
                <p
                  className="w-66 text-[#FFF0C1] text-xl font-covered-by-your-grace"
                  data-aos="fade-in"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                >
                  Whether it’s books, podcasts, or a long reflective walk, I’m
                  constantly refining how I build, lead, and grow.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col max-w-[1440px] w-full py-60 px-38 min-h-300">
            <h1 className="font-vina-sans text-7xl tracking-tight max-w-2xl text-[#FFF0C1] mb-10">
              I lead a local faith community where I teach, guide, and walk with
              people in their spiritual journeys
            </h1>

            <div className=" flex flex-col w-full h-auto mt-[-102px] relative">
              <img src={preaching} alt className="w-full h-auto" />
              <div className="absolute top-[70px] left-[-100px] rotate-[-15deg] hover:rotate-0 cursor-pointer duration-200 ">
                <ProfileCard role="pastor.Discipler.leader" color={"#CF94E1"} />
              </div>
            </div>

            <div className="flex justify-between mt-9 w-full gap-12">
              <p className="flex-1 text-white text-base font-geist">
                I am a Product Designer with over 6 years of experience in
                designing digital products. I have a knack for solving complex
                user problems with a research-driven approach. Alongside my
                interest in research, I recently became a lot more fascinated
                with Product Strategy and have been actively learning and
                delivering value in that line.
              </p>
              <p className="flex-1 text-white text-base font-geist">
                I am a Product Designer with over 6 years of experience in
                designing digital products. I have a knack for solving complex
                user problems with a research-driven approach. Alongside my
                interest in research, I recently became a lot more fascinated
                with Product Strategy and have been actively learning and
                delivering value in that line.
              </p>
              <div className=" flex flex-col items-center shrink-0 grow-0 basis=[316px]">
                <video
                  src="https://www.youtube.com/live/U8p1aiYuPF8?si=qEiYw6AFZsyJlamm"
                  controls
                  className="w-full h-auto rounded-lg shadow-lg border-15 border-[#2E2E2E]"
                ></video>
                <div className="flex items-center justify-center gap-2 mt-3 text-base font-geist">
                  <img src={youtube} alt="youtube" className="w-8 mt-1" />
                  <span className="font-vina-sans text-2xl text-amber-100 tracking-tight">
                    listen to my sermons on youtube
                  </span>
                </div>
              </div>
            </div>
          </section>
          h
          <section className="flex flex-col max-w-[1440px] w-full py-60 px-38 min-h-300">
            <div className="w-fit relative">
              <div className="absolute right-[-140px] top-[-40px] rotate-[15deg] hover:rotate-0 cursor-pointer duration-200 ">
                <ProfileCard role="featured work" color="#94E1CA" />
              </div>
              <h1 className="font-vina-sans text-7xl tracking-tight text-[#FFF0C1]">
                my Recent Projects
              </h1>
            </div>

            <div className="flex flex-col w-full h-262 gap-17 mt-[-4px] relative overflow-y-auto no-scrollbar">
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
                topValue="200px"
              />
              <ProjectCard
                projectImage={project3}
                title="REMINDR"
                highlight="UI/UX, Time Planning, Mobile app"
                year="2020"
                description="A time planning and tracking app for the average millenial."
                bgColor="#9EE5FF"
                topValue="200px"
              />
            </div>

            <button
              style={{ backgroundColor: "#2E2E2E" }}
              className="mt-18 rounded-2xl py-6 px-8 self-center text-base text-white leading-none cursor-pointer w-fit font-geist font-semibold"
            >
              View my portfolio
            </button>
          </section>
          <section className="flex flex-col max-w-[1440px] w-full py-60 px-38 min-h-300">
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
                company="test gorilla , Amsterdam"
                role="Product Designer  | 2022 - Present"
                description="I designed the V2 of the Code-runner which increased candidate satisfaction by 20% over 3 months. I’m currently designing the experience for the Candidate Environment of the TG WebApp. "
                logo={testGorilla}
                bgColor="#D410AA"
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
          <footer className="w-full bg-[#2E2E2E]">
            <div className="flex justify-between w-full max-w-[1440px] p-38">
              <div className="flex flex-col w-7/10 gap-14">
                <p className="text-white text-2xl font-geist w-8/10">
                  I am currently open to opportunities (remote, full-time,
                  freelance or contract). Connect with me & let's push your
                  billion-dollar idea to reality
                </p>

                <button
                  onClick={handleCopy}
                  className="border-4 relative border-solid border-[#94E1CA] rounded-3xl px-6 py-4 bg-[#94E1CA] flex items-center gap-2 w-fit cursor-pointer hover:bg-transparent duration-300 group hover:scale-101 active:scale-99"
                >
                  <span className="font-vina-sans text-[68px] leading-none group-hover:text-[#94E1CA] text-black">
                    adetuwoisrael24@gmail.com
                  </span>
                  <svg
                    className="w-9 h-9"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.2125 27.4116C43.5645 26.5614 43.5645 25.4807 43.5645 23.3233C43.5645 21.166 43.5645 20.0852 43.2125 19.2351C42.9797 18.6729 42.6385 18.1622 42.2083 17.732C41.7781 17.3018 41.2673 16.9605 40.7052 16.7278C39.855 16.3757 38.7743 16.3757 36.6169 16.3757H23.1849C20.5912 16.3757 19.2943 16.3757 18.3041 16.8801C17.4318 17.3243 16.7227 18.0334 16.2785 18.9057C15.7742 19.8938 15.7742 21.1907 15.7742 23.7865V37.2185C15.7742 39.3758 15.7742 40.4566 16.1262 41.3067C16.5976 42.441 17.4992 43.3447 18.6335 43.814C19.4837 44.1661 20.5644 44.1661 22.7218 44.1661C24.8791 44.1661 25.9598 44.1661 26.81 43.814M43.2125 27.4116C42.9797 27.9737 42.6385 28.4845 42.2083 28.9147C41.7781 29.3449 41.2673 29.6861 40.7052 29.9189C39.855 30.2709 38.7743 30.2709 36.6169 30.2709C34.4596 30.2709 33.3788 30.2709 32.5286 30.6229C31.9665 30.8557 31.4558 31.1969 31.0256 31.6271C30.5954 32.0573 30.2541 32.5681 30.0213 33.1302C29.6693 33.9804 29.6693 35.0611 29.6693 37.2185C29.6693 39.3758 29.6693 40.4566 29.3173 41.3067C29.0846 41.8689 28.7433 42.3796 28.3131 42.8098C27.8829 43.24 27.3721 43.5813 26.81 43.814M43.2125 27.4116C42.1051 31.23 40.0681 34.7142 37.2839 37.5522C34.4997 40.3903 31.0552 42.4937 27.2588 43.6741L26.81 43.814M34.3011 16.3757V14.5231C34.3011 11.9293 34.3011 10.6324 33.7967 9.64225C33.3531 8.77028 32.6447 8.06119 31.7732 7.61665C30.7809 7.1123 29.4841 7.1123 26.8903 7.1123H13.9215C11.3277 7.1123 10.0308 7.1123 9.04069 7.61665C8.16841 8.06084 7.45928 8.76997 7.01508 9.64225C6.51074 10.6304 6.51074 11.9272 6.51074 14.5231V27.4919C6.51074 30.0856 6.51074 31.3825 7.01508 32.3727C7.45973 33.2455 8.16787 33.9536 9.04069 34.3983C10.0288 34.9026 11.3277 34.9026 13.9235 34.9026H15.7742"
                      stroke="#2E2E2E"
                      stroke-width="3.08781"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="group-hover:stroke-[#94E1CA] duration-200"
                    />
                  </svg>

                  {/* Popup */}
                  {showPopup && (
                    <div className="absolute top-full -right-12 mt-2 px-2 py-1 bg-black text-white text-base rounded shadow-lg animate-fade">
                      Copied!
                    </div>
                  )}
                </button>

                <p className="text-white text-2xl font-geist w-8/10">
                  © 2025 Israel Adetuwo. All Rights Reserved.
                </p>
              </div>

              <div className="flex flex-col items-left gap-14 w-39">
                <a
                  href=""
                  target="_blank"
                  className="flex rounded-[28px] bg-white p-1 h-fit w-fit"
                >
                  <div className="border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2 bg-[#9EE5FF]">
                    <span className="font-vina-sans text-3xl leading-none">
                      LinkedIn
                    </span>
                  </div>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="flex rounded-[28px] bg-white p-1 h-fit w-fit"
                >
                  <div className="border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2 bg-[#FFF0C1]">
                    <span className="font-vina-sans text-3xl leading-none">
                      BEHANCE
                    </span>
                  </div>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="flex rounded-[28px] bg-white p-1 h-fit w-fit"
                >
                  <div className="border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2 bg-[#F0BFFF]">
                    <span className="font-vina-sans text-3xl leading-none">
                      INSTAGRAM
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
