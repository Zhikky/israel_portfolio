export default function RoleCollab({ roleCollab }) {
  const parseText = (text) => {
    const parts = text.split(/(\[\[highlight\]\]|\[\[\/highlight\]\])/);
    let isHighlight = false;

    return parts.map((part, index) => {
      if (part === "[[highlight]]") {
        isHighlight = true;
        return null;
      }

      if (part === "[[/highlight]]") {
        isHighlight = false;
        return null;
      }

      return (
        <span
          key={index}
          className={isHighlight ? "font-semibold text-[#FFF0C1]" : ""}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col justify-between gap-3 md:gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {roleCollab.headingTitle}
      </h2>

      <div
        style={{
          gap:
            roleCollab.headingTitle != "Access Management: The Key Feature"
              ? "40px"
              : "0px",
        }}
        className="flex flex-col justify-between w-full py-8 md:py-12 lg:py-18.75 px-4 md:px-16 lg:px-32.5 rounded-xl md:rounded-2xl bg-[#2E2E2E]"
      >
        <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
          {roleCollab.bodyText.paragraphBody[0]}
        </p>
        {roleCollab.headingTitle == "Access Management: The Key Feature" && (
          <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
            {roleCollab.bodyText.paragraphBody[1]}
          </p>
        )}
        <ul className="list-disc pl-5 md:pl-4.5 flex flex-col gap-1.5 md:gap-2">
          {roleCollab.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]"
            >
              {parseText(content)}
            </li>
          ))}
        </ul>

        {roleCollab.headingTitle != "Access Management: The Key Feature" && (
          <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
            {roleCollab.bodyText.paragraphBody[1]}
          </p>
        )}
        <div
          style={{
            marginTop:
              roleCollab.headingTitle == "Access Management: The Key Feature"
                ? "40px"
                : "0px",
          }}
          className="flex flex-col gap-3 md:gap-4"
        >
          {roleCollab.bodyImg.map((content, index) => (
            <img
              key={index}
              className="w-full rounded-[8px]"
              src={content}
              alt={`${roleCollab.headingTitle} illustration ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}