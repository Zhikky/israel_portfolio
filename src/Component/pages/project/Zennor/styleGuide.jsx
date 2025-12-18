import styleGuide from "../../../../assets/projectsImage/Zennor/styleGuide.png";

export default function StyleGuide() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        Style Guide
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <img src={styleGuide} alt="futureX" className="w-full  object-cover" />
      </div>
    </div>
  );
}
