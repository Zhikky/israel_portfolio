export default function ResearchProcess({ researchProcess }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {researchProcess.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-2xl leading-7.5">
          {researchProcess.bodyText[0].heading}
        </p>

        <div className="flex flex-col gap-14">
          <p className="text-white font-geist text-base leading-[25px]">
            {researchProcess.bodyText[0].body}
          </p>

          <img
            src={researchProcess.bodyImg[0]}
            alt="futureX"
            className="w-full  object-cover"
          />

          {researchProcess.bodyText[1] && <div className="flex flex-col w-full ">
            <p className="text-white font-geist text-base leading-[25px]">
              {researchProcess.bodyText[1].body}
            </p>
            <ul className="text-white font-geist text-base leading-[25px] list-disc ml-8">
              {researchProcess.bodyText[1].listBody.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>}

          <img
            src={researchProcess.bodyImg[1]}
            alt="futureX"
            className="w-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
