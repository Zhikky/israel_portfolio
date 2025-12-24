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
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {initialApproach.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-[25px]">
          {parseText(initialApproach.bodyText.paragraphBody[0])}
        </p>

        <ul className="list-disc pl-6 mt-1 flex flex-col gap-2">
          {initialApproach.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-base leading-[25px]"
            >
              {content}
            </li>
          ))}
        </ul>

        <p className="text-white font-geist mt-5.5 mb-8 text-base leading-[25px]">
          {initialApproach.bodyText.paragraphBody[1]}
        </p>

        <p className="font-rethink-sans italic mb-10 text-[#8E8E8E] text-[20.77px] font-medium tracking-tight leading-6.5">
          "{initialApproach.quote.quoteBody}"
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#FFF0C1] font-vina-sans text-[26px] leading-none font-bold ">
            {initialApproach.keyMisalignments.heading}
          </h3>
          <ul className="list-disc ml-7">
            {initialApproach.keyMisalignments.listBody.map(
              (innerContent, index) => (
                <li
                  key={index}
                  className="text-white font-geist text-base leading-[25px]"
                >
                  {innerContent}
                </li>
              )
            )}
          </ul>
        </div>

        <p className="text-[#FFF0C1] font-vina-sans mt-10 text-[35px] tracking-tight leading-[30px]">
          This led us back to the <span className="line-through">drawing board</span> RESEARCH.
        </p>
      </div>
    </div>
  );
}
