import arrow from "../../../assets/Vector 1.png"

export default function UxResearch() {
  return (
    <div className="flex flex-col justify-between gap-16 w-full h-fit max-w-[1440px] px-36 mt-180 mb-60">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        UX Research Case Studies & Articles
      </h2>

      <div className="flex justify-between gap-10.5 w-full">
        <div className="w-full min-h-142.5 flex-1 px-8.5 py-8 flex flex-col justify-end rounded-4xl bg-[#2E2E2E]">
          <div className="flex flex-col gap-5.5 w-full max-w-93.25">
            <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
              Designing for easier apartment search and rentals - A UX Research
              Case Study
            </h2>
            <button className="flex items-center gap-1 font-geist text-base font-medium tracking-[-2%] leading-none font w-fit py-3 px-4 rounded-[8px] bg-white cursor-pointer hover:translate-y-1 duration-300">
              Read on medium
              <img src={arrow} alt="arrow" width="8px" />
            </button>
          </div>
        </div>
        <div className="w-full min-h-142.5 flex-1 px-8.5 py-8 flex flex-col justify-end rounded-4xl bg-[#2E2E2E]">
          <div className="flex flex-col gap-5.5 w-full max-w-93.25">
            <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
              Designing for easier apartment search and rentals - A UX Research
              Case Study
            </h2>
            <button className="flex items-center gap-2 font-geist text-base font-medium tracking-[-2%] leading-none font w-fit py-3 px-4 rounded-[8px] bg-white cursor-pointer hover:translate-y-1 duration-300">
              Read on medium
              <img src={arrow} alt="arrow" width="8px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
