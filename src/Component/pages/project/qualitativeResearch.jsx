export default function QualitativeResearch({ qualitativeResearch }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {qualitativeResearch.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFB05F] font-geist text-base leading-[25px] font-bold">
          {qualitativeResearch.bodyText.paragraphBody[0]}
        </p>
        <div className="flex flex-col gap-2">
          {qualitativeResearch.bodyText.listBody.map((content, index) => (
            <div key={index}>
              <h3 className="text-[#FFF0C1] font-vina-sans text-[26px] font-bold ">
                {content.heading}
              </h3>
              <ul className="list-disc ml-7">
                {content.list.map((innerContent, index) => (
                  <li
                    key={index}
                    className="text-white font-geist text-base leading-[25px]"
                  >
                    {innerContent}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <p className="font-rethink-sans italic text-[#8E8E8E] text-[22.22px] font-medium tracking-tighter leading-9.5">
            "{qualitativeResearch.quote.quoteBody}"
          </p>
          {qualitativeResearch.quoteTitle && (
            <h3 className="font-rethink-sans italic text-white text-[18px] font-medium leading-7.5">
              {qualitativeResearch.quoteTitle}
            </h3>
          )}
        </div>
        <img className="mt-4" src={qualitativeResearch.bodyImg[0]} />
      </div>
    </div>
  );
}
