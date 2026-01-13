import ProfileCard from "../../composables/profileCard";
import IsraelBackground from "../../../assets/IsraelBackground.jpg";
import designer from "../../../assets/iconoir_design-nib.png";
import church from "../../../assets/ic_round-church.png";
import strategist from "../../../assets/healthicons_integrated-data-and-research-24px.png";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div
      className="flex justify-center w-full relative mt-[-60px] sm:mt-[-80px] lg:mt-[-96px] h-[1000px] md:h-[1140px] bg-[center] md:bg-center "
      style={{
        backgroundImage: `url(${IsraelBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>

      <div className="relative max-w-[1440px] h-full px-8 md:px-16 lg:px-28 pt-16 sm:pt-20 md:pt-24 lg:pt-16 pb-12 sm:pb-20 md:pb-24 lg:pb-30 flex flex-col items-center justify-end">
        <div className="flex flex-col lg:flex-row justify-between z-1 w-full flex-wrap relative gap-8 lg:gap-0">
          <h1 className="text-[86px] md:text-8xl lg:text-9xl xl:text-[183px] text-[#fff] font-vina-sans leading-[78%] sm:leading-snug lg:leading-35">
            Israel<br></br> Adetuwo
          </h1>

          <div className="flex flex-col w-full lg:w-9/19">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-geist leading-6 sm:leading-7 md:leading-8">
              I'm Israel, a product designer with 7+ years of experience turning
              complex problems into intuitive experiences. I also pastor a small
              but vibrant community and recently began exploring product
              coaching as a new way to build people.
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-geist leading-6 sm:leading-7 md:leading-8 mt-4 lg:mt-8">
              When I'm not designing or teaching, you'll find me mentoring,
              planning my next trip, or pushing myself at the gym. I believe
              that clarity, craft, and conviction should guide how we live and
              work.
            </p>
            <NavLink
              to="/portfolio"
              className="mt-4 sm:mt-5 lg:mt-5.25 rounded-[50px] text-white border-2 border-white py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 text-base sm:text-lg leading-none cursor-pointer w-fit text-center font-geist font-semibold hover:scale-101 duration-200 hover:bg-white hover:text-black active:scale-99"
            >
              View my portfolio
            </NavLink>
          </div>

          {/* Profile Cards - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:block absolute top-[-50px] left-[-92px] rotate-[-8deg] hover:rotate-0 cursor-pointer duration-200">
            <ProfileCard
              icon={designer}
              role="Product Designer"
              color="#CF94E1"
            />
          </div>

          <div className="hidden lg:block absolute rotate-[-4.29deg] bottom-[10px] left-[389px] hover:rotate-0 cursor-pointer duration-200">
            <ProfileCard icon={church} role="Pastor" color="#94E1CA" />
          </div>

          <div className="hidden lg:block absolute rotate-[-17.49deg] right-[-75px] top-[300px] hover:rotate-0 cursor-pointer duration-200">
            <ProfileCard
              icon={strategist}
              role="UX Strategist"
              color="#FFF0C1"
            />
          </div>

          {/* Mobile Profile Cards - Horizontal scroll on mobile */}
          <div className="flex lg:hidden gap-3 flex-wrap overflow-x-auto pb-4 w-full scrollbar-hide">
            <div className="flex-shrink-0">
              <ProfileCard
                icon={designer}
                role="Product Designer"
                color="#CF94E1"
              />
            </div>
            <div className="flex-shrink-0">
              <ProfileCard icon={church} role="Pastor" color="#94E1CA" />
            </div>
            <div className="flex-shrink-0">
              <ProfileCard
                icon={strategist}
                role="UX Strategist"
                color="#FFF0C1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
