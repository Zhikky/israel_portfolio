import image1 from "../../../assets/projects image/image 38.png";

export default function DesignSystems() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Design Systems
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <img src={image1} alt="futureX" className="w-full object-cover" />
      </div>
    </div>
  );
}
