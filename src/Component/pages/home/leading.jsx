import preaching from "../../../assets/Group 9 (1).webp";
import youtube from "../../../assets/youtube_logo.png";
import ProfileCard from "../../composables/profileCard";
import { NavLink } from "react-router-dom";

export default function Leading() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full py-40 sm:py-16 md:py-18 lg:py-20 px-[36px] sm:px-8 md:px-16 lg:px-36 min-h-300">
      <h1 className="font-vina-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[88%] md:leading-none tracking-tight w-[75%] md:w-auto max-w-2xl text-[#FFF0C1] mb-8 lg:mb-10">
        I lead a local faith community where I teach, guide, and walk with
        people in their spiritual journeys
      </h1>

      <div className="flex flex-col w-full h-auto mt-[-60px] sm:mt-[-70px] md:mt-[-90px] lg:mt-[-102px] relative">
        <img src={preaching} alt="Preaching" className="w-full h-[270px] md:h-auto object-cover " />
        <div className="absolute top-[40px] -left-[50px] md:top-[70px] md:left-[-100px] rotate-[-15deg] hover:rotate-0 cursor-pointer duration-200">
          <ProfileCard role="pastor.Discipler.leader" color={"#CF94E1"} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-6 sm:mt-7 md:mt-8 lg:mt-9 w-full gap-6 sm:gap-8 lg:gap-12">
        <p className="text-white text-sm sm:text-base font-geist">
          I'm privileged to pastor a local Church assembly in the city of Lagos,
          Nigeria called{" "}
          <span className="text-[#FFB05F]">"The Sent House"</span>. I also lead
          an interdenominational ministry (Kerusso Ministry) across 3 campuses
          in Nigeria where I passionately teach God's word in the demonstration
          of His Spirit and Power as well as disciple folks who want to walk at
          the center of his will for their lives.
        </p>
        <p className="text-white text-sm sm:text-base font-geist">
          My goal to see people come to the knowledge of Christ and make Him
          known to the world is what birthed Kerusso Ministry as well as other
          initiatives to ensure that believers are discipled to effectively
          carry out God's plan on the Earth. Being involved in the secular space
          myself, I strive to help believers emphasize and uphold the balance
          between fulfilling the assignment of the gospel given to all men while
          maintaining excellence in their secular rendeavors.
        </p>
        <div className="flex flex-col items-center shrink-0 grow-0 basis-auto lg:basis-[370px] w-full lg:w-auto">
          <iframe
            src="https://www.youtube.com/embed/U8p1aiYuPF8?si=qEiYw6AFZsyJlamm"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-lg shadow-lg border-8 sm:border-12 lg:border-15 border-[#2E2E2E]"
          ></iframe>
          <div className="flex items-center justify-center gap-2 mt-3 font-geist">
            <img src={youtube} alt="youtube" className="w-6 sm:w-7 lg:w-8 mt-1" />
            <span className="font-vina-sans text-lg sm:text-xl lg:text-2xl text-amber-100 tracking-tight text-center">
              listen to my sermons on youtube
            </span>
          </div>
        </div>
      </div>

      <NavLink
        to="/about"
        className="mt-4 sm:mt-5 lg:mt-5.25 rounded-[50px] text-white border-2 border-white py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 text-base sm:text-lg leading-none cursor-pointer w-fit text-center font-geist font-semibold hover:scale-101 duration-200 hover:bg-white hover:text-black active:scale-99"
      >
        Get to know me
      </NavLink>
    </section>
  );
}