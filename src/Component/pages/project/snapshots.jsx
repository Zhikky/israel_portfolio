import image1 from "../../../assets/projectsImage/image 29.png";
import image2 from "../../../assets/projectsImage/image 30.png";
import image3 from "../../../assets/projectsImage/image 31.png";
import image4 from "../../../assets/projectsImage/image 32.png";

export default function Snapshots() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        FutureX V1 - Snapshots
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <div className="flex flex-col gap4">
          <img src={image1} alt="futureX" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap4">
          <img src={image2} alt="futureX" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap4">
          <img src={image3} alt="futureX" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap4">
          <img src={image4} alt="futureX" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
