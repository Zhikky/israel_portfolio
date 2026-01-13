import israel from "../../../../src/assets/IMG-20250813-WA0031 2.webp";

export default function AboutHeroSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] mt-12 sm:mt-16 md:mt-20 lg:mt-23.25 mb-16 sm:mb-24 md:mb-32 lg:mb-41 px-10 sm:px-12 md:px-20 lg:px-36">
      <img
        src={israel}
        alt="Israel Adetuwo"
        className="w-48 sm:w-56 md:w-64 lg:w-74 h-auto -mb-8 sm:-mb-10 md:-mb-12 lg:-mb-16 z-3"
      />

      <div className="flex flex-col w-full px-6 sm:px-10 md:px-16 lg:px-21 pt-12 sm:pt-16 md:pt-20 lg:pt-25 pb-12 sm:pb-16 md:pb-20 lg:pb-24.75 rounded-xl sm:rounded-[20px] bg-[#2E2E2E]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-15">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] w-full lg:w-fit font-vina-sans text-white leading-[100%] -tracking-[2px] -mt-2 sm:-mt-3 lg:-mt-4">
            pastor.
            <br /> Designer.
            <br /> Strategist
          </h1>
          <a
            href="mailto:adetuwoisrael24@gmail.com"
            target="_blank"
            className="sm:hidden  rounded-[50px] bg-[#94E1CA] text-[#1A1A1A] py-4 px-8 sm:py-5 sm:px-9 lg:py-6.5 lg:px-11 text-sm sm:text-base leading-none cursor-pointer w-full sm:w-fit text-center font-geist font-semibold hover:scale-101 duration-200 active:scale-99"
          >
            Work with me
          </a>

          <div className="flex flex-col w-full lg:w-[42.75%]">
            <p className="text-white text-base sm:text-[17px] lg:text-[18px] font-geist leading-relaxed">
              I am a Product Designer with over 7 years of experience in
              designing digital products. I have a knack for solving complex
              user problems with a research-driven approach. Alongside my
              interest in research, I recently became a lot more fascinated with
              Product Strategy and have been actively learning and delivering
              value in that line.
              <br />
              <span className="mt-6 sm:mt-8 lg:mt-9.5 block">
                I have a proven track record of designing products from zero
                users to thousands.
              </span>
            </p>
            <a
              href="mailto:adetuwoisrael24@gmail.com"
              target="_blank"
              className="hidden sm:block mt-6 sm:mt-8 lg:mt-9.5 rounded-[50px] bg-[#94E1CA] text-[#1A1A1A] py-4 px-8 sm:py-5 sm:px-9 lg:py-6.5 lg:px-11 text-sm sm:text-base leading-none cursor-pointer w-full sm:w-fit text-center font-geist font-semibold hover:scale-101 duration-200 active:scale-99"
            >
              Work with me
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between mt-6 sm:mt-12 md:mt-14 lg:mt-17 gap-6 sm:gap-10 lg:gap-0">
          <p className="text-white text-base sm:text-[17px] lg:text-[18px] font-geist w-full lg:w-2/5 leading-relaxed">
            I don't just think design and aesthetics, I'm also keen of
            recognizing user needs and solving them while catering to business
            and stakeholder expectations or projections.
          </p>
          <p className="text-white text-base sm:text-[17px] lg:text-[18px] font-geist w-full lg:w-[42.75%] leading-relaxed">
            With a background in{" "}
            <span className="text-[#FFB05F] font-bold">
              Brand Identity and Marketing design,
            </span>{" "}
            I've evolved from working in generalist design settings to being a
            lot more research and data driven in my approach to delivering value
            in UX Design.
          </p>
        </div>

        <h1 className="w-full font-vina-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] text-[#FFF0C1] mt-10 sm:mt-14 md:mt-18 lg:mt-21.5 tracking-tight leading-tight sm:leading-snug md:leading-[70px] lg:leading-[90px]">
          product designer with 7+ years of experience. pastor to a vibrant
          community of believers. currently exploring product coaching as a new
          way to build people.
        </h1>
      </div>
    </section>
  );
}
