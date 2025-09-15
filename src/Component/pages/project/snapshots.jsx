import image1 from "../../../assets/projects image/image 29.png";
import image2 from "../../../assets/projects image/image 30.png";
import image3 from "../../../assets/projects image/image 31.png";
import image4 from "../../../assets/projects image/image 32.png";

export default function Snapshots() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        FutureX V1 - Snapshots
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <div className="flex flex-col gap4">
          <img src={image1} alt="futureX" className="w-full object-cover" />
          <p className=" font-vina-sans text-[#FFF0C1] text-xl w-full text-justify">
            Snapshot of FutureX V1
          </p>
        </div>
        <div className="flex flex-col gap4">
          <img src={image2} alt="futureX" className="w-full object-cover" />
          <p className=" font-vina-sans text-[#FFF0C1] text-xl w-full text-justify">
            Snapshot of Features Page V1
          </p>
        </div>
        <div className="flex flex-col gap4">
          <img src={image3} alt="futureX" className="w-full object-cover" />
          <p className=" font-vina-sans text-[#FFF0C1] text-xl w-full text-justify">
            Snapshot of online lesson note for FutureX V1
          </p>
        </div>
        <div className="flex flex-col gap4">
          <img src={image4} alt="futureX" className="w-full object-cover" />
          <p className=" font-vina-sans text-[#FFF0C1] text-xl w-full text-justify">
            A snapshot of the student-end of FutureX V1
          </p>
        </div>
      </div>
    </div>
  );
}
