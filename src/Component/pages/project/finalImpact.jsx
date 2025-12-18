export default function FinalImpact({ finalImpact }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {finalImpact.headingTitle}
      </h2>

      <div
        style={{
          gap:
            finalImpact.headingTitle != "Impact on the Secfix Product"
              ? "40px"
              : "0px",
        }}
        className="flex flex-col justify-between w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]"
      >
        {finalImpact.headingTitle == "Impact on the Secfix Product" && (
          <p className="text-white font-geist text-base leading-[25px]">
            {finalImpact.bodyText.paragraphBody[0]}
          </p>
        )}

        <div className="flex flex-col gap-2">
          {finalImpact.bodyText.listBody.map((content, index) => (
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
        {finalImpact.headingTitle != "Impact on the Secfix Product" && (
          <p className="text-white font-geist text-base leading-[25px]">
            {finalImpact.bodyText.paragraphBody[0]}
          </p>
        )}
      </div>
    </div>
  );
}
