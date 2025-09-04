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
  const pinRef = useRef(null); // pinned section
  const trackRef = useRef(null); // horizontal row

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;

      const maxX = () => track.scrollWidth - window.innerWidth; // total horizontal distance

      gsap.to(track, {
        x: () => -maxX(),
        ease: "none",
        scrollTrigger: {
          //   trigger: pinRef.current,
          //   start: "top top", // when the top of the trigger hits the top of the viewport
          //   end: "+=1000", // scroll distance matches horizontal width
          //   pin: true,
          //   scrub: true,
          //   invalidateOnRefresh: true, // recalc on resize/font loads
          //   anticipatePin: 1,
          //   snap: 1 / (track.children.length - 1), // <— uncomment if you want panel snapping

          trigger: pinRef.current,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=1000",
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
    }, pinRef);

    // ensure correct sizing after first paint
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative max-w-[1440px] mt-60 mb-40">
      <div ref={pinRef} className="overflow-hidden">
        {/* The horizontal track */}
        <div
          ref={trackRef}
          className="flex flex-nowrap h-fit will-change-transform gap-10 w-[3500px]"
        >
          <p className="font-covered-by-your-grace text-base text-[#fff0c1] w-[240px] ml-37">
            When I’m not designing or teaching, you’ll find me mentoring,
            planning my next trip, or pushing myself at the gym. I believe that
            clarity, craft, and conviction should guide how we live and work.
          </p>
          <div>
            <img
              src={israel2}
              alt=""
              className="min-w-86 object-cover h-[460px] rounded-2xl"
            />
            <p className="font-vina-sans text-[52px] text-white">CROATIA</p>
          </div>
          <div>
            <img
              src={israel3}
              alt=""
              className="min-w-86 object-cover h-[460px] rounded-2xl"
            />
            <p className="font-vina-sans text-[52px] text-white">GERMANY</p>
          </div>
          <div>
            <img
              src={israel4}
              alt=""
              className="min-w-86 object-cover h-[460px] rounded-2xl"
            />
            <p className="font-vina-sans text-[52px] text-white">
              SOUTH AFRICA
            </p>
          </div>
          <div>
            <img
              src={israel1}
              alt=""
              className="min-w-86 object-cover h-[460px] rounded-2xl"
            />
            <p className="font-vina-sans text-[52px] text-white">PORTUGAL</p>
          </div>
          <div className="pr-37">
            <img
              src={israel5}
              alt=""
              className="min-w-86 object-cover h-[460px] rounded-2xl"
            />
            <p className="font-vina-sans text-[52px] text-white">GYM</p>
          </div>
          {/* Add more panels as needed */}
        </div>
      </div>
    </section>
  );
}

