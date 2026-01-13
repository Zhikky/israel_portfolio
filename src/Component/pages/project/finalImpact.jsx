export default function FinalImpact({ finalImpact }) {
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
        {finalImpact.headingTitle}
      </h2>

      <div
        style={{
          gap:
            finalImpact.headingTitle != "Impact on the Secfix Product"
              ? "24px"
              : "0px",
        }}
        className="flex flex-col justify-between w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 md:gap-10 rounded-2xl bg-[#2E2E2E]"
      >
        {finalImpact.headingTitle == "Impact on the Secfix Product" && (
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            {finalImpact.bodyText.paragraphBody[0]}
          </p>
        )}

        <div className="flex flex-col gap-2">
          {finalImpact.bodyText.listBody.map((content, index) => (
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
                    {parseText(innerContent)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {finalImpact.headingTitle != "Impact on the Secfix Product" && (
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            {finalImpact.bodyText.paragraphBody[0]}
          </p>
        )}
      </div>
    </div>
  );
}