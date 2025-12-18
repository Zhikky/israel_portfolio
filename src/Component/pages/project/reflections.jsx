export default function Reflections({ reflections }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {reflections.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        {reflections.bodyText.paragraphBody && <p className="text-white font-geist text-base leading-[25px]">
          {reflections.bodyText.paragraphBody[0]}
        </p>}

        <div className="flex flex-col gap-2">
          {reflections.bodyText.listBody.map((content, index) => (
            <div key={index}>
              {content.heading && (
                <h3 className="text-[#FFF0C1] font-vina-sans text-[26px] font-bold ">
                  {content.heading}
                </h3>
              )}
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

      </div>
    </div>
  );
}
