export default function ResearchPivot({ researchPivot }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {researchPivot.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-[26px] px-[26px] md:py-18.75 md:px-18.25 gap-8 md:gap-14 rounded-2xl bg-[#2E2E2E]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10.5">
          <div className="w-full md:w-[26.5%] flex flex-col gap-2">
            <h3 className="text-[#FFF0C1] font-vina-sans text-xl md:text-[26px] leading-none font-bold">
              {researchPivot.bodyText[0].heading}
            </h3>
            <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
              {researchPivot.bodyText[0].body}
            </p>
            <ul className="list-disc ml-5 md:ml-7">
              {researchPivot.bodyText[0].listBody.map((innerContent, index) => (
                <li
                  key={index}
                  className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
                >
                  {innerContent}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[26.5%] flex flex-col gap-2">
            <h3 className="text-[#FFF0C1] font-vina-sans text-xl md:text-[26px] leading-none font-bold">
              {researchPivot.bodyText[1].heading}
            </h3>
            <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
              {researchPivot.bodyText[1].body}
            </p>
            <ul className="list-disc ml-5 md:ml-7">
              {researchPivot.bodyText[1].listBody.map((innerContent, index) => (
                <li
                  key={index}
                  className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
                >
                  {innerContent}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[34.8%] flex flex-col gap-2">
            <h3 className="text-[#FFF0C1] font-vina-sans text-xl md:text-[26px] leading-none font-bold">
              {researchPivot.bodyText[2].heading}
            </h3>
            <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
              {researchPivot.bodyText[2].body}
            </p>
            <ul className="">
              {researchPivot.bodyText[2].listBody.map((innerContent, index) => (
                <li
                  key={index}
                  className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
                >
                  {innerContent}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#FFF0C1] font-vina-sans text-xl md:text-[26px] leading-none font-bold">
            {researchPivot.painPoints.heading}
          </h3>
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            {researchPivot.painPoints.body}
          </p>
          <ul className="list-disc ml-5 md:ml-7">
            {researchPivot.painPoints.listBody.map((innerContent, index) => (
              <li
                key={index}
                className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
              >
                {innerContent}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}