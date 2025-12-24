import israel from "../../../../src/assets/IMG-20250813-WA0031 2.webp";

export default function AboutHeroSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] mt-23.25 mb-41 px-36">
      <img src={israel} alt="" className="w-74 h-auto -mb-16 z-3" />

      <div className="flex flex-col w-full px-21 pt-25 pb-24.75 rounded-[20px] bg-[#2E2E2E]">
        <div className=" flex justify-between gap-15">
          <h1 className="text-[140px] w-fit font-vina-sans text-white leading-[100%] -tracking-[2px] -mt-4">
            pastor.
            <br /> Designer.
            <br /> Strategist
          </h1>

          <div className="flex flex-col w-[42.75%]">
            <p className="text-white text-[18px] font-geist">
              I am a Product Designer with over 7 years of experience in
              designing digital products. I have a knack for solving complex
              user problems with a research-driven approach. Alongside my
              interest in research, I recently became a lot more fascinated with
              Product Strategy and have been actively learning and delivering
              value in that line.
              <br />
              <span className="mt-9.5 block">
                I have a proven track record of designing products from zero
                users to thousands.
              </span>
            </p>
            <button className="mt-9.5 rounded-[50px] bg-[#94E1CA] text-[#1A1A1A] py-6.5 px-11 text-base leading-none cursor-pointer w-fit font-geist font-semibold hover:scale-101 duration-200">
              Work with me
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between mt-17">
          <p className="text-white text-[18px] font-geist w-2/5">
            I don’t just think design and aesthetics, I’m also keen of
            recognizing user needs and solving them while catering to business
            and stakeholder expectations or projections.
          </p>
          <p className="text-white text-[18px] font-geist w-[42.75%]">
            With a background in{" "}
            <span className="text-[#FFB05F] font-bold">
              Brand Identity and Marketing design,
            </span>{" "}
            I’ve evolved from working in generalist design settings to being a
            lot more research and data driven in my approach to delivering value
            in UX Design.
          </p>
        </div>

        <h1 className=" w-full font-vina-sans text-[70px] text-[#FFF0C1] mt-21.5 tracking-tight leading-[90px]">
          product designer with 7+ years of experience. pastor to a vibrant
          community of believers. currently exploring product coaching as a new
          way to build people.
        </h1>
      </div>
    </section>
  );
}
