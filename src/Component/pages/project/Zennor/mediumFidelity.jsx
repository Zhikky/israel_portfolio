import mediumFidelity1 from "../../../../assets/projectsImage/Zennor/mediumFidelity1.png";
import mediumFidelity2 from "../../../../assets/projectsImage/Zennor/mediumFidelity2.png";
import mediumFidelity3 from "../../../../assets/projectsImage/Zennor/mediumFidelity3.png";

export default function MediumFidelity() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        Medium Fidelity (Wireframe)
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <img
          src={mediumFidelity1}
          alt="futureX"
          className="w-full  object-cover"
        />
        <img
          src={mediumFidelity2}
          alt="futureX"
          className="w-full  object-cover"
        />
        <img
          src={mediumFidelity3}
          alt="futureX"
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
