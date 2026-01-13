export default function ResearchFoundation({ researchFoundation }) {
  const parseText = (text) => {
    const parts = text.split(/(\[\[highlight2\]\]|\[\[\/highlight2\]\])/);
    let isHighlight = false;

    return parts.map((part, index) => {
      if (part === "[[highlight2]]") {
        isHighlight = true;
        return null;
      }

      if (part === "[[/highlight2]]") {
        isHighlight = false;
        return null;
      }

      return (
        <span
          key={index}
          className={isHighlight ? "font-semibold text-[#FFB05F]" : ""}
        >
          {part}
        </span>
      );
    });
  };
  
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {researchFoundation.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
          {researchFoundation.bodyText.paragraphBody[0]}
        </p>

        <ul className="list-disc pl-4 md:pl-4.5 flex flex-col gap-2">
          {researchFoundation.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
            >
              {parseText(content)}
            </li>
          ))}
        </ul>

        {researchFoundation.bodyText.paragraphBody[1] && (
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            {researchFoundation.bodyText.paragraphBody[1]}
          </p>
        )}

        {researchFoundation.bodyImg && (
          <div>
            {researchFoundation.bodyImg.map((content, index) => (
              <img key={index} className="mt-2 md:mt-4 rounded-[8px] w-full" src={content} />
            ))}
          </div>
        )}

        <div className="self-center">
          <p className="font-rethink-sans italic text-[#8E8E8E] text-base md:text-[18px] font-medium leading-6 md:leading-7.5">
            "{researchFoundation.quote.quoteBody}"
          </p>
          {researchFoundation.quoteTitle && (
            <h3 className="font-rethink-sans italic text-white text-base md:text-[18px] font-medium leading-6 md:leading-7.5">
              {researchFoundation.quoteTitle}
            </h3>
          )}
        </div>

        <div className="self-center flex -mt-2 md:-mt-4 flex-col gap-3 md:gap-4">
          <h3 className="font-vina-sans text-xl md:text-3xl -tracking-[0.04em] text-[#FFF0C1] leading-7 md:leading-10.25">
            {researchFoundation.hierachy.title}
          </h3>
          <div className="font-vina-sans flex flex-col items-center gap-2 md:gap-2.75 text-xl md:text-3xl -tracking-[0.04em] text-white leading-6 md:leading-6.75">
            {researchFoundation.hierachy.body.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}