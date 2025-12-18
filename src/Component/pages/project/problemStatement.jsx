export default function ProblemStatement({ problem }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {problem.headingTitle}
      </h2>

      <div
        style={{
          gap:
            problem.headingTitle != "The Core Problem" ||
            problem.headingTitle != "The Problem"
              ? "40px"
              : "0px",
        }}
        className="flex flex-col justify-between w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]"
      >
        {problem.bodyText.paragraphTitle && (
          <h3 className="text-[#FFF0C1] font-vina-sans text-2xl leading-[30px]">
            {problem.bodyText.paragraphTitle}
          </h3>
        )}
        {problem.headingTitle != "Challenges" && (
          <p className="text-white font-geist text-base leading-[25px]">
            {problem.bodyText.paragraphBody[0]}
          </p>
        )}

        {problem.bodyText.listBody && (
          <ul className="list-disc pl-6 flex flex-col gap-2">
            {problem.bodyText.listBody.map((content, index) => (
              <li
                key={index}
                className="text-white font-geist text-base leading-[25px]"
              >
                {content}
              </li>
            ))}
          </ul>
        )}

        {problem.headingTitle == "Problem Statement" && (
          <p className="text-white font-geist text-base leading-[25px]">
            {problem.bodyText.paragraphBody[1]}
          </p>
        )}

        {problem.headingTitle == "Challenges" && (
          <div className="flex flex-col gap-10">
            {problem.bodyText.paragraphBody.map((content, index) => (
              <p
                key={index}
                className="text-white font-geist text-base leading-[25px]"
              >
                {content}
              </p>
            ))}
          </div>
        )}

        {problem.headingTitle == "The Core Problem" && (
          <p className="text-[#FFF0C1] font-vina-sans mt-10 text-2xl leading-[30px]">
            {problem.bodyText.paragraphBody[1]}
          </p>
        )}

        {problem.bodyImg && <img className="mt-4" src={problem.bodyImg[0]} />}

        {problem.quote && (
          <div>
            <p className="font-rethink-sans italic text-[#8E8E8E] text-[18px] font-medium leading-7.5">
              "{problem.quote.quoteBody}"
            </p>
            <h3 className="font-rethink-sans italic text-white text-[18px] font-medium leading-7.5">
              {problem.quoteTitle}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
