import israel1 from "../../../assets/18be830661ed38528e74a7c1ac279a63736c64ca (1).webp";
import israel2 from "../../../assets/65b0f40f48044f6dc52e517b9c124df3f252bc73.webp";
import israel3 from "../../../assets/41330c92237b8efcc5c7f5f56da8493863b6d195.webp";
import israel4 from "../../../assets/fb70702dfaeea44778fee3b338cddc65fe0129b0.webp";

export default function BeyoundTheScreen({ displayImagePopup }) {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] w-full pt-67 pb-48 px-37 min-h-56">
      <h1 className="font-vina-sans text-7xl tracking-tight text-white">
        Beyond The Screen
      </h1>

      <div className="flex flex-col text-white items-center mt-17 w-full overflow-hidden">
        <div className="flex w-full justify-between items-center">
          <p
            className="w-83.5 text-[#FFF0C1] text-[32px] font-covered-by-your-grace"
            data-aos="fade-in"
            data-aos-mirror="true"
          >
            My faith shapes how I lead, create, and care for people. I believe
            in building things that matter—and serving people while at it.
          </p>
          <p
            className="w-87 mb-6 text-[#FFF0C1] text-[32px] font-covered-by-your-grace"
            data-aos="fade-in"
            data-aos-mirror="true"
          >
            Travel gives me perspective. Exploring new places challenges me to
            stay curious and think bigger.
          </p>
        </div>

        <div className="relative w-full min-h-[270px] group bg-red left-5/13">
          <img
            src={israel4}
            alt=""
            className="w-60 h-71 shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover absolute cursor-pointer"
            data-aos="israel-1"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-easing="ease-in-out"
            onClick={() => displayImagePopup(israel4)}
          />

          <img
            src={israel3}
            alt=""
            className="w-60 h-71 shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover absolute cursor-pointer"
            data-aos="israel-2"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-easing="ease-in-out"
            onClick={() => displayImagePopup(israel3)}
          />
          <img
            src={israel2}
            alt=""
            className="w-60 h-71 shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover absolute cursor-pointer"
            data-aos="israel-3"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-easing="ease-in-out"
            onClick={() => displayImagePopup(israel2)}
          />
          <img
            src={israel1}
            alt=""
            className="w-60 h-71  shadow-[0px_4px_35px_0px_#000000BF] rounded-xl border-6 border-white object-cover object-left absolute cursor-pointer"
            data-aos="israel-4"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-easing="ease-in-out"
            onClick={() => displayImagePopup(israel1)}
          />
        </div>

        <div className="flex w-9/10 justify-between items-center mt-10 self-end z-5">
          <p
            className="w-83.5 text-[#FFF0C1] text-[32px] justify-self-center font-covered-by-your-grace"
            data-aos="fade-in"
            data-aos-mirror="true"
          >
            I stay consistent with fitness because it keeps me grounded,
            focused, and mentally strong.
          </p>
          <p
            className="w-90 mb-60 text-[#FFF0C1] text-[32px] font-covered-by-your-grace"
            data-aos="fade-in"
            data-aos-mirror="true"
          >
            Whether it’s books, podcasts, or a long reflective walk, I’m
            constantly refining how I build, lead, and grow.
          </p>
        </div>
      </div>
    </section>
  );
}
