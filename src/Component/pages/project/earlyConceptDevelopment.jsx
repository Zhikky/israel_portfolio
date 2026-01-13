export default function EarlyConceptDevelopment({ conceptDevelopment }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white px-[26px] md:px-0">
        {conceptDevelopment.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
          {conceptDevelopment.bodyText.paragraphBody[0]}
        </p>
        <ul className="list-disc pl-4 md:pl-4.5 flex flex-col gap-2">
          {conceptDevelopment.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
            >
              {content}
            </li>
          ))}
        </ul>
        <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
          {conceptDevelopment.bodyText.paragraphBody[1]}
        </p>
        <img className="mt-2 md:mt-4 w-full" src={conceptDevelopment.bodyImg[0]} />
      </div>
    </div>
  );
}