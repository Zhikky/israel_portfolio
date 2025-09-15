import image1 from "../../../assets/projects image/image 26.png";
import image2 from "../../../assets/projects image/image 27.png";
import image3 from "../../../assets/projects image/image 28.png";

export default function WireFrames() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Wireframes
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <div className="w-full h-91.75 flex gap-4">
          <img
            src={image2}
            alt="futureX"
            className="w-full h-full object-cover"
          />
          <img
            src={image3}
            alt="futureX"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap4">
          <img
            src={image1}
            alt="futureX"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
