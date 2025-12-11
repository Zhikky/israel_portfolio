import ProfileCard from "../../composables/profileCard";
import vanitywall from "../../../assets/vanitywall.png"

export default function ReferenceBoard() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full mt-20 pb-60 pt-10 px-38 min-h-300 bg-[#1A1A1A] z-0">
      <div className="w-fit relative">
        <div className="absolute left-[760px] top-[-42px] rotate-[20deg] hover:rotate-0 cursor-pointer duration-200 ">
          <ProfileCard role="vanity wall" color="#CF94E1" />
        </div>
        <h1 className="font-vina-sans text-[111px] tracking-tight leading-24 text-[#FFF0C1] w-6/7">
          What people I’ve worked with say about me
        </h1>
      </div>

      <img src={vanitywall} className="-mt-5 z-2" />
    </section>
  );
}
