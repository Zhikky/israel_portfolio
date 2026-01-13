import mediumFidelity1 from "../../../../assets/projectsImage/Zennor/mediumFidelity1.png";
import mediumFidelity2 from "../../../../assets/projectsImage/Zennor/mediumFidelity2.png";
import mediumFidelity3 from "../../../../assets/projectsImage/Zennor/mediumFidelity3.png";

export default function MediumFidelity() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        Medium Fidelity (Wireframe)
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <img
          src={mediumFidelity1}
          alt="Medium fidelity wireframe 1"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={mediumFidelity2}
          alt="Medium fidelity wireframe 2"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={mediumFidelity3}
          alt="Medium fidelity wireframe 3"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
