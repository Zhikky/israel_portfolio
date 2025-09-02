import ProfileCard from "../../composables/profileCard";
import IsraelBackground from "../../../assets/IMG-20250813-WA0030 1.webp";
import arrow from "../../../assets/Vector 1.png";
import designer from "../../../assets/iconoir_design-nib.png";
import church from "../../../assets/ic_round-church.png";
import strategist from "../../../assets/healthicons_integrated-data-and-research-24px.png";



export default function HeroSection() {
  return (
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
              I’m Israel, a product designer with 7+ years of experience turning
              complex problems into intuitive experiences. I also pastor a small
              but vibrant community and recently began exploring product
              coaching as a new way to build people.
            </p>
            <p className="text-white text-base font-geist font-medium leading-5 mt-4">
              When I’m not designing or teaching, you’ll find me mentoring,
              planning my next trip, or pushing myself at the gym. I believeh
              that clarity, craft, and conviction should guide how we live and
              work.
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
  );
}
