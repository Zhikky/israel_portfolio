import image1 from "../../../assets/projects image/image 24.png";
import image2 from "../../../assets/projects image/image 25.png";

export default function InformationArchitecture() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Information Architecture
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <div className="flex flex-col gap4">
          <img
            src={image1}
            alt="futureX"
            className="w-full object-cover"
          />
          <p className=" font-vina-sans text-[#FFF0C1] text-xl w-full text-justify">
            Information Architecture - Admin
          </p>
        </div>
        <div className="flex flex-col gap4">
          <img
            src={image2}
            alt="futureX"
            className="w-full object-cover"
          />
          <p className=" font-vina-sans text-[#FFF0C1] text-xl w-full text-justify">
            Information Architecture - student
          </p>
        </div>
      </div>
    </div>
  );
}
