import image1 from "../../../assets/projectsImage/image 33.png";
import image2 from "../../../assets/projectsImage/image 35.png";
import image3 from "../../../assets/projectsImage/image 36.png";
import image4 from "../../../assets/projectsImage/image 37.png";

export default function V2Designs() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        FutureX V2 - Hi-Fi Designs
      </h2>

      <div className="flex flex-col justify-between w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 gap-6 md:gap-16 rounded-2xl bg-[#2E2E2E]">
        <img
          src={image1}
          alt="FutureX V2 Design 1"
          className="w-full rounded-lg object-cover"
        />
        <img
          src={image2}
          alt="FutureX V2 Design 2"
          className="w-full rounded-lg object-cover"
        />
        <img
          src={image3}
          alt="FutureX V2 Design 3"
          className="w-full rounded-lg object-cover"
        />
        <img
          src={image4}
          alt="FutureX V2 Design 4"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
