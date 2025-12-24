export default function QuantitativeResearch({ quantitativeResearch }) {
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
        {quantitativeResearch.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFB05F] font-geist text-base leading-[25px] font-bold">
          {parseText(quantitativeResearch.bodyText.paragraphBody[0])}
        </p>
        <div className="flex flex-col gap-2">
          {quantitativeResearch.bodyText.listBody.map((content, index) => (
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
        <p className="text-white font-geist text-base leading-[25px]">
          {quantitativeResearch.bodyText.paragraphBody[1]}
        </p>
        {quantitativeResearch.bodyImg.map((content, index) => (
          <img key={index} src={content} />
        ))}
      </div>
    </div>
  );
}
