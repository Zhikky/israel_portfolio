import highFidelity1 from "../../../../assets/projectsImage/Zennor/highFidelity1.png";
import highFidelity2 from "../../../../assets/projectsImage/Zennor/highFidelity2.png";
import highFidelity3 from "../../../../assets/projectsImage/Zennor/highFidelity3.png";

export default function HighFidelity() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        High Fidelity
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <img
          src={highFidelity1}
          alt="futureX"
          className="w-full  object-cover"
        />
        <img
          src={highFidelity2}
          alt="futureX"
          className="w-full  object-cover"
        />
        <img src={highFidelity3} alt="futureX" className="w-full  object-cover" />
      </div>
    </div>
  );
}
