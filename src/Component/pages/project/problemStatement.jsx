export default function ProblemStatement({ problem }) {
  return (
    <div className="flex flex-col justify-between gap-3 md:gap-4 w-full h-fit max-w-[840px] mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
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
        className="flex flex-col justify-between w-full py-8 md:py-12 lg:py-18.75 px-4 md:px-16 lg:px-32.5 rounded-xl md:rounded-2xl bg-[#2E2E2E]"
      >
        {problem.bodyText.paragraphTitle && (
          <h3 className="text-[#FFF0C1] font-vina-sans text-lg md:text-xl lg:text-2xl leading-tight md:leading-[30px]">
            {problem.bodyText.paragraphTitle}
          </h3>
        )}
        {problem.headingTitle != "Challenges" && (
          <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
            {problem.bodyText.paragraphBody[0]}
          </p>
        )}

        {problem.bodyText.listBody && (
          <ul className="list-disc pl-5 md:pl-6 flex flex-col gap-1.5 md:gap-2">
            {problem.bodyText.listBody.map((content, index) => (
              <li
                key={index}
                className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]"
              >
                {content}
              </li>
            ))}
          </ul>
        )}

        {problem.headingTitle == "Problem Statement" && (
          <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
            {problem.bodyText.paragraphBody[1]}
          </p>
        )}

        {problem.headingTitle == "Challenges" && (
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            {problem.bodyText.paragraphBody.map((content, index) => (
              <p
                key={index}
                className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]"
              >
                {content}
              </p>
            ))}
          </div>
        )}

        {problem.headingTitle == "The Core Problem" && (
          <p className="text-[#FFF0C1] font-vina-sans mt-6 md:mt-8 lg:mt-10 text-lg md:text-xl lg:text-2xl leading-tight md:leading-[30px]">
            {problem.bodyText.paragraphBody[1]}
          </p>
        )}

        {problem.bodyImg && (
          <img
            className="mt-3 md:mt-4 w-full rounded-lg"
            src={problem.bodyImg[0]}
            alt="Problem illustration"
          />
        )}

        {problem.quote && (
          <div className="flex flex-col gap-1">
            <p className="font-rethink-sans italic text-[#8E8E8E] text-base md:text-[18px] font-medium leading-relaxed md:leading-7.5">
              "{problem.quote.quoteBody}"
            </p>
            <h3 className="font-rethink-sans italic text-white text-base md:text-[18px] font-medium leading-relaxed md:leading-7.5">
              {problem.quoteTitle}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}