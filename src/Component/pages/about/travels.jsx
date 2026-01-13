import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import israel1 from "../../../assets/65b0f40f48044f6dc52e517b9c124df3f252bc73.webp";
import israel2 from "../../../assets/travels/IMG-20250813-WA0034.webp";
import israel3 from "../../../assets/travels/IMG-20250815-WA0019.webp";
import israel4 from "../../../assets/travels/IMG-20250815-WA0022.webp";
import israel5 from "../../../assets/travels/IMG-20250815-WA0035.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Travels() {
  const pinWrapperRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;

      const maxX = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -maxX(),
        ease: "none",
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: "top-=280 top",
          end: () => `+=${maxX()}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, pinWrapperRef);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section className="relative max-w-[1440px] mt-20 sm:mt-32 md:mt-44 lg:mt-60 mb-16 sm:mb-24 md:mb-32 lg:mb-40">
      <div ref={pinWrapperRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap h-fit will-change-transform gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-[2200px] sm:w-[2800px] md:w-[3200px] lg:w-[3500px]"
        >
          <p className="font-covered-by-your-grace text-sm sm:text-base text-[#fff0c1] w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] ml-9 sm:ml-16 md:ml-24 lg:ml-37">
            When I'm not designing or teaching, you'll find me mentoring,
            planning my next trip, or pushing myself at the gym. I believe that
            clarity, craft, and conviction should guide how we live and work.
          </p>
          <div>
            <img
              src={israel2}
              alt="Croatia travel"
              className="min-w-64 sm:min-w-72 md:min-w-80 lg:min-w-86 object-cover h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-xl sm:rounded-2xl"
            />
            <p className="font-vina-sans text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] text-white">CROATIA</p>
          </div>
          <div>
            <img
              src={israel3}
              alt="Germany travel"
              className="min-w-64 sm:min-w-72 md:min-w-80 lg:min-w-86 object-cover h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-xl sm:rounded-2xl"
            />
            <p className="font-vina-sans text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] text-white">GERMANY</p>
          </div>
          <div>
            <img
              src={israel4}
              alt="South Africa travel"
              className="min-w-64 sm:min-w-72 md:min-w-80 lg:min-w-86 object-cover h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-xl sm:rounded-2xl"
            />
            <p className="font-vina-sans text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] text-white">
              SOUTH AFRICA
            </p>
          </div>
          <div>
            <img
              src={israel1}
              alt="Portugal travel"
              className="min-w-64 sm:min-w-72 md:min-w-80 lg:min-w-86 object-cover h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-xl sm:rounded-2xl"
            />
            <p className="font-vina-sans text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] text-white">PORTUGAL</p>
          </div>
          <div className="pr-9 sm:pr-16 md:pr-24 lg:pr-37">
            <img
              src={israel5}
              alt="Gym"
              className="min-w-64 sm:min-w-72 md:min-w-80 lg:min-w-86 object-cover h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-xl sm:rounded-2xl"
            />
            <p className="font-vina-sans text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] text-white">GYM</p>
          </div>
        </div>
      </div>
    </section>
  );
}