import preaching from "../../../assets/Group 9 (1).webp";
import youtube from "../../../assets/youtube_logo.png";
import ProfileCard from "../../composables/profileCard";


export default function Leading() {
  return (
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
          I am a Product Designer with over 6 years of experience in designing
          digital products. I have a knack for solving complex user problems
          with a research-driven approach. Alongside my interest in research, I
          recently became a lot more fascinated with Product Strategy and have
          been actively learning and delivering value in that line.
        </p>
        <p className="flex-1 text-white text-base font-geist">
          I am a Product Designer with over 6 years of experience in designing
          digital products. I have a knack for solving complex user problems
          with a research-driven approach. Alongside my interest in research, I
          recently became a lot more fascinated with Product Strategy and have
          been actively learning and delivering value in that line.
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
  );
}
