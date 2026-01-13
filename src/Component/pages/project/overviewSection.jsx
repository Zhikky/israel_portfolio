export default function OverviewSection({ overview }) {
  const bodyText = overview.body;

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
    <div className="flex flex-col justify-between gap-0 md:gap-4 w-full h-fit max-w-[840px] mt-20 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {overview.title}
      </h2>

      <div className="flex flex-col justify-between gap-8 md:gap-12 lg:gap-16.5 w-full py-8 md:py-12 lg:py-18.75 px-4 md:px-16 lg:px-32.5 rounded-xl md:rounded-2xl bg-[#2E2E2E]">
        {overview.img && overview.img[1] && (
          <img
            src={overview.img[1]}
            alt="Overview illustration"
            className="w-full object-cover rounded-lg"
          />
        )}

        <div className="flex flex-col justify-between items-center gap-4 md:gap-6 lg:gap-8">
          {bodyText.map((text, index) => (
            <p
              key={index}
              className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]"
            >
              {parseText(text)}
            </p>
          ))}
        </div>

        {overview.img && (
          <img
            src={overview.img[0]}
            alt="Overview illustration"
            className="w-full object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
}