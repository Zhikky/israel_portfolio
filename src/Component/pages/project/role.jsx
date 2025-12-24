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
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {roleCollab.headingTitle}
      </h2>

      <div
        style={{
          gap:
            roleCollab.headingTitle != "Access Management: The Key Feature"
              ? "40px"
              : "0px",
        }}
        className="flex flex-col justify-between w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]"
      >
        <p className="text-white font-geist text-base leading-[25px]">
          {roleCollab.bodyText.paragraphBody[0]}
        </p>
        {roleCollab.headingTitle == "Access Management: The Key Feature" && (
          <p className="text-white font-geist text-base leading-[25px]">
            {roleCollab.bodyText.paragraphBody[1]}
          </p>
        )}
        <ul className="list-disc pl-4.5 flex flex-col gap-2">
          {roleCollab.bodyText.listBody.map((content, index) => (
            <li
              key={index}
              className="text-white font-geist text-base leading-[25px]"
            >
              {parseText(content)}
            </li>
          ))}
        </ul>

        {roleCollab.headingTitle != "Access Management: The Key Feature" && (
          <p className="text-white font-geist text-base leading-[25px]">
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
        >
          {roleCollab.bodyImg.map((content, index) => (
            <img key={index} className="mt-4 rounded-[8px]" src={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
