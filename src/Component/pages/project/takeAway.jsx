export default function Takeaway({ conclusion }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {conclusion.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-[25px]">
          {conclusion.bodyText.paragraphBody[0]}
        </p>
      </div>
    </div>
  );
}
