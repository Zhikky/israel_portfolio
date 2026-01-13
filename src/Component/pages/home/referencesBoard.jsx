import ProfileCard from "../../composables/profileCard";
import vanitywall from "../../../assets/vanitywall.png"
import vanitywallMobile from "../../../assets/vanitywall-mobile.webp"

export default function ReferenceBoard() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full mt-[160px] sm:mt-32 md:mt-24 lg:mt-20 pb-[160px] sm:pb-48 md:pb-56 lg:pb-60 pt-6 sm:pt-8 md:pt-9 lg:pt-10 px-9 sm:px-8 md:px-16 lg:px-38  bg-[#1A1A1A] z-0">
      <div className="w-full lg:w-fit relative">
        <div className="absolute right-[-30px] sm:right-[200px] md:right-[400px] lg:left-[760px] top-[-25px] sm:top-[-32px] md:top-[-38px] lg:top-[-42px] rotate-[20deg] hover:rotate-0 cursor-pointer duration-200">
          <ProfileCard role="vanity wall" color="#CF94E1" />
        </div>
        <h1 className="font-vina-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[111px] tracking-tight leading-[88%] sm:leading-tight md:leading-snug lg:leading-24 text-[#FFF0C1] w-full lg:w-6/7">
          What people I've worked with say about me
        </h1>
      </div>

      <img src={vanitywall} alt="Testimonials vanity wall" className="hidden lg:block -mt-3 sm:-mt-4 lg:-mt-5 z-2" />
      <img src={vanitywallMobile} alt="Testimonials vanity wall" className="lg:hidden -mt-3 sm:-mt-4 lg:-mt-5 z-2" />
    </section>
  );
}