export default function UsabilityTestingResults({ usabilityTesting }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {usabilityTesting.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
          {usabilityTesting.bodyText.paragraphBody[0]}
        </p>

        <ul className="list-disc pl-4 md:pl-6 flex flex-col gap-2">
          {usabilityTesting.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]"
            >
              {content}
            </li>
          ))}
        </ul>

        {usabilityTesting.bodyText.paragraphBody[1] && (
          <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-[25px]">
            {usabilityTesting.bodyText.paragraphBody[1]}
          </p>
        )}

        <div className="self-center text-center">
          <p className="font-rethink-sans italic text-[#8E8E8E] text-base md:text-[18px] font-medium leading-6 md:leading-7.5">
            "{usabilityTesting.quote.quoteBody}"
          </p>
        </div>
      </div>
    </div>
  );
}
