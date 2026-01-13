export default function InformationArchitecture({ informationArchitecture }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        {informationArchitecture.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <div className="flex flex-col gap-3 md:gap-4">
          {informationArchitecture.bodyImg.map((content, index) => (
            <img
              src={content}
              key={index}
              alt="futureX"
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}