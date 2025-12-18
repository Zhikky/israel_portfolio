
export default function OverviewSection({ overview }) {
  const bodyText = overview.body;

  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {overview.title}
      </h2>

      <div className="flex flex-col justify-between gap-16.5 w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        {overview.img && overview.img[1] && (
          <img
            src={overview.img[1]}
            alt="futureX"
            className="w-full  object-cover"
          />
        )}

        <div className="flex flex-col justify-between items-center gap-8">
          {bodyText.map((text, index) => (
            <p
              key={index}
              className="text-white font-geist text-base leading-[25px]"
            >
              {text}
            </p>
          ))}
        </div>

        {overview.img && (
          <img
            src={overview.img[0]}
            alt="futureX"
            className="w-full  object-cover"
          />
        )}
      </div>
    </div>
  );
}
