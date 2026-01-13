import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OpenToThoughts() {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <p
      ref={textRef}
      className="w-full text-center text-[#FFF0C1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-vina-sans mb-24 sm:mb-40 md:mb-56 lg:mb-72 px-9 sm:px-12 md:px-20 lg:px-36 max-w-[1440px] leading-tight sm:leading-snug lg:leading-normal"
    >
      {"I'm always open to thoughtful conversations-about design, growth, coaching, or life. Whether you're building a product, exploring your next step, or just curious, I'd love to hear from you."
        .split(" ")
        .map((word, i) => (
          <span key={i} className="inline-block mr-1">
            {word}
          </span>
        ))}
    </p>
  );
}