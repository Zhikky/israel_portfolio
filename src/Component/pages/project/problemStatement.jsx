import image1 from "../../../assets/projects image/image 19-2.png";

export default function ProblemStatement() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Problem Statement
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-6xl leading-13.75 w-133">
          RESHAPING THE TRADITIONAL SYSTEM OF LEARNING AND EDUCATION MANAGEMENT
          AROUND THE GLOBE
        </p>

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

        <img
          src={image1}
          alt="futureX"
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
