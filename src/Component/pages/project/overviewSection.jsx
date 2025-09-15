import image1 from "../../../assets/projects image/image 19-2.png"
import image2 from "../../../assets/projects image/image 18.png"


export default function OverviewSection() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-30.5">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Overview
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <img src={image1} alt="futureX" className="w-full  object-cover" />

        <div className="flex justify-between items-center">
          <p className=" font-geist text-white text-sm w-[40%] max-w-100 text-justify">
            The entire project lasted a period of about 3 months and is broken
            down into 5 phases (Discovery, Problem Definition, Design, Testing &
            Iteration, Handoff). However, the reality was there were back and
            forth's between these phases as the entire development process was
            in an agile environment.
          </p>
          <p className=" font-geist text-white text-sm w-[40%] max-w-100 text-justify">
            The entire project lasted a period of about 3 months and is broken
            down into 5 phases (Discovery, Problem Definition, Design, Testing &
            Iteration, Handoff). However, the reality was there were back and
            forth's between these phases as the entire development process was
            in an agile environment.
          </p>
        </div>

        <img src={image2} alt="futureX" className="w-full  object-cover" />
      </div>
    </div>
  );
}
