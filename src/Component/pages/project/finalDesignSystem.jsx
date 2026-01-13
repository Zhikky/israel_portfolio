export default function FinalDesignSystem({ finalDesignSystem }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white px-[26px] md:px-0">
        {finalDesignSystem.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        {finalDesignSystem.headingTitle == "Redesigning Access Management" && (
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            The new solution was built to match{" "}
            <span className="text-[#FFB05F] font-bold">
              how compliance teams actually work,{" "}
            </span>
            <span className="font-bold">not how
            competitors structured their workflows.</span>
          </p>
        )}
        <div className="flex flex-col gap-2">
          {finalDesignSystem.bodyText.listBody.map((content, index) => (
            <div key={index}>
              <h3 className="text-[#FFF0C1] font-vina-sans text-xl md:text-[26px] font-bold">
                {content.heading}
              </h3>
              <ul className="list-disc ml-5 md:ml-7">
                {content.list.map((innerContent, index) => (
                  <li
                    key={index}
                    className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
                  >
                    {innerContent}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {finalDesignSystem.bodyText.paragraphBody && (
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            {finalDesignSystem.bodyText.paragraphBody[1]}
          </p>
        )}
        {finalDesignSystem.bodyImg.map((content, index) => (
          <img key={index} src={content} className="w-full" />
        ))}
      </div>
    </div>
  );
}