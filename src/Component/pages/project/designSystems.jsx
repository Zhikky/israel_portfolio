import image1 from "../../../assets/projectsImage/image 38.png";

export default function DesignSystems() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        Design Systems
      </h2>

      <div className="flex flex-col justify-between w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <img src={image1} alt="futureX" className="w-full object-cover" />
      </div>
    </div>
  );
}
