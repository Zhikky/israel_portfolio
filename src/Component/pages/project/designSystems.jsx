import image1 from "../../../assets/projectsImage/image 38.png";

export default function DesignSystems() {
  return (
    <div className="flex flex-col justify-between gap-3 md:gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        Design Systems
      </h2>

      <div className="flex flex-col justify-between w-full py-8 md:py-12 lg:py-18.75 px-4 md:px-16 lg:px-32.5 rounded-xl md:rounded-2xl bg-[#2E2E2E]">
        <img 
          src={image1} 
          alt="Design system overview" 
          className="w-full object-cover rounded-lg" 
        />
      </div>
    </div>
  );
}