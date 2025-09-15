import image1 from "../../../assets/projects image/image 33.png";
import image2 from "../../../assets/projects image/image 35.png";
import image3 from "../../../assets/projects image/image 36.png";
import image4 from "../../../assets/projects image/image 37.png";

export default function V2Designs() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        FutureX V2 - Hi-Fi Designs
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <img src={image1} alt="futureX" className="w-full object-cover" />
        <img src={image2} alt="futureX" className="w-full object-cover" />
        <img src={image3} alt="futureX" className="w-full object-cover" />
        <img src={image4} alt="futureX" className="w-full object-cover" />
      </div>
    </div>
  );
}

