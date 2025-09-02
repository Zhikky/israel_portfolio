import preaching from "../../../assets/Group 9 (1).webp";
import youtube from "../../../assets/youtube_logo.png";
import ProfileCard from "../../composables/profileCard";

export default function Leading() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full py-60 px-37 min-h-300">
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
        <p className="flex-1 text-white text-[14px] font-geist">
          I’m privileged to Pastor a local Church assembly in the city of Lagos,
          Nigeria called “The Sent House”. I also lead an interdenominational
          ministry (Kerusso Ministry) across 3 campuses in Nigeria where I
          passionately teach God’s word in the demonstration of His Spirit and
          Power as well as disciple folks who want to walk at the center of his
          will for their lives.
        </p>
        <p className="flex-1 text-white text-[14px] font-geist">
          My goal to see people come to the knowledge of Christ and make Him
          known to the world is what birthed Kerusso Ministry as well as other
          initiatives to ensure that believers are discipled to effectively
          carry out God’s plan on the Earth. Being involved in the secular space
          myself, I strive to help believers emphasize and uphold the balance
          between fulfilling the assignment of the gospel given to all men while
          maintaining excellence in their secular rendeavors.
        </p>
        <div className=" flex flex-col items-center shrink-0 grow-0 basis=[316px]">
          <iframe
            src="https://www.youtube.com/embed/U8p1aiYuPF8?si=qEiYw6AFZsyJlamm"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-auto rounded-lg shadow-lg border-15 border-[#2E2E2E]"
          ></iframe>
          <div className="flex items-center justify-center gap-2 mt-3  font-geist">
            <img src={youtube} alt="youtube" className="w-8 mt-1" />
            <span className="font-vina-sans text-2xl text-amber-100 tracking-tight">
              listen to my sermons on youtube
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
