export default function WireFrames({ wireFrames }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        {wireFrames.headingTitle}
      </h2>

      <div className="flex flex-col justify-between w-full py-18.75 px-32.5 gap-10 rounded-2xl bg-[#2E2E2E]">
        {wireFrames.bodyImg.map((content, index) => (
          <img
            src={content}
            key={index}
            alt="futureX"
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
