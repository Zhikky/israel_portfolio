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
          start: "center center", // fully invisible when it just enters
          end: "bottom center", // fully visible when scrolled out
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <p
      ref={textRef}
      className="w-full text-center text-[#FFF0C1] text-[72px] font-vina-sans mb-72 px-36 max-w-[1440px]"
    >
      {"I’m always open to thoughtful conversations-about design, growth, coaching, or life. Whether you’re building a product, exploring your next step, or just curious, I’d love to hear from you."
        .split(" ")
        .map((word, i) => (
          <span key={i} className="inline-block mr-1">
            {word}
          </span>
        ))}
    </p>
  );
}
