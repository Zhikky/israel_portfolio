export default function InitialApproach({ initialApproach }) {
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
        {initialApproach.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
          {parseText(initialApproach.bodyText.paragraphBody[0])}
        </p>

        <ul className="list-disc pl-5 md:pl-6 mt-1 flex flex-col gap-2">
          {initialApproach.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
            >
              {content}
            </li>
          ))}
        </ul>

        <p className="text-white font-geist mt-4 md:mt-5.5 mb-6 md:mb-8 text-sm md:text-base leading-[22px] md:leading-[25px]">
          {initialApproach.bodyText.paragraphBody[1]}
        </p>

        <p className="font-rethink-sans italic mb-6 md:mb-10 text-[#8E8E8E] text-lg md:text-[20.77px] font-medium tracking-tight leading-6 md:leading-6.5">
          "{initialApproach.quote.quoteBody}"
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#FFF0C1] font-vina-sans text-xl md:text-[26px] leading-none font-bold">
            {initialApproach.keyMisalignments.heading}
          </h3>
          <ul className="list-disc ml-5 md:ml-7">
            {initialApproach.keyMisalignments.listBody.map(
              (innerContent, index) => (
                <li
                  key={index}
                  className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
                >
                  {innerContent}
                </li>
              )
            )}
          </ul>
        </div>

        <p className="text-[#FFF0C1] font-vina-sans mt-6 md:mt-10 text-2xl md:text-[35px] tracking-tight leading-[26px] md:leading-[30px]">
          This led us back to the <span className="line-through">drawing board</span> RESEARCH.
        </p>
      </div>
    </div>
  );
}