export default function TitleSection({ title, img }) {
  return (
    <div className="w-full flex flex-col items-center justify-center relative h-fit mt-20 md:mt-40 lg:mt-82">
      <h1 className="top-20 w-fit text-white font-vina-sans text-[55px] sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] tracking-tight leading-tight md:leading-[120px] lg:leading-[180px] px-4 text-center">
        {title}
      </h1>
      <div
        style={{ color: "#FFF0C1" }}
        className={`w-full flex flex-col items-center justify-between -mt-4 lg:-mt-6.5 px-8 sm:px-8 md:px-16 lg:px-36.25 mb-8 md:mb-12 lg:mb-17 z-5`}
      >
        <div className="w-full max-w-[1142px] flex flex-col items-center justify-between bg-[#2E2E2E] rounded-[12px] md:rounded-[16px] lg:rounded-[20px]">
          <div className="flex flex-col w-full gap-4 md:gap-6 lg:gap-10 px-11.25 sm:px-8 md:px-16 lg:px-23.5 pt-6 md:pt-10 lg:pt-13 justify-between overflow-hidden">
            <img src={img} alt={title} className="w-full object-cover object-top h-40 sm:h-64 md:h-96 lg:h-135" />
          </div>
        </div>
      </div>
    </div>
  );
}