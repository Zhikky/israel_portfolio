export default function EarlyConceptDevelopment({ conceptDevelopment }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {conceptDevelopment.headingTitle}
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-[25px]">
          {conceptDevelopment.bodyText.paragraphBody[0]}
        </p>
        <ul className="list-disc pl-4.5 flex flex-col gap-2">
          {conceptDevelopment.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-base leading-[25px]"
            >
              {content}
            </li>
          ))}
        </ul>
        <p className="text-white font-geist text-base leading-[25px]">
          {conceptDevelopment.bodyText.paragraphBody[1]}
        </p>
        <img className="mt-4" src={conceptDevelopment.bodyImg[0]} />
      </div>
    </div>
  );
}
