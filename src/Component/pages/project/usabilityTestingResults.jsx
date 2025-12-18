export default function UsabilityTestingResults({ usabilityTesting }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {usabilityTesting.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-[25px]">
          {usabilityTesting.bodyText.paragraphBody[0]}
        </p>

        <ul className="list-disc pl-6 mt-1 flex flex-col gap-2">
          {usabilityTesting.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-base leading-[25px]"
            >
              {content}
            </li>
          ))}
        </ul>

        <p className="text-white font-geist mt-5.5 mb-8 text-base leading-[25px]">
          {usabilityTesting.bodyText.paragraphBody[1]}
        </p>

        <p className="font-rethink-sans italic text-[#8E8E8E] text-[24.29px] font-medium tracking-tight leading-7.5">
          "{usabilityTesting.quote.quoteBody}"
        </p>
      </div>
    </div>
  );
}
