export default function ResearchProcess({ researchProcess }) {
  return (
    <div className="flex flex-col justify-between gap-3 md:gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {researchProcess.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-8 lg:gap-10 w-full py-8 md:py-12 lg:py-18.75 px-4 md:px-16 lg:px-32.5 rounded-xl md:rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-lg md:text-xl lg:text-2xl leading-tight md:leading-7.5">
          {researchProcess.bodyText[0].heading}
        </p>

        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
            {researchProcess.bodyText[0].body}
          </p>

          <img
            src={researchProcess.bodyImg[0]}
            alt="Research process illustration"
            className="w-full object-cover rounded-lg"
          />

          {researchProcess.bodyText[1] && (
            <div className="flex flex-col w-full gap-3 md:gap-4">
              <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
                {researchProcess.bodyText[1].body}
              </p>
              <ul className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px] list-disc ml-6 md:ml-8 flex flex-col gap-1.5 md:gap-2">
                {researchProcess.bodyText[1].listBody.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          )}

          <img
            src={researchProcess.bodyImg[1]}
            alt="Research process illustration"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}