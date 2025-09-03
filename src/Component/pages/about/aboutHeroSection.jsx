import israel from "../../../../src/assets/IMG-20250813-WA0031 2.webp";
import arrow from "../../../../src/assets/Vector 1.png";

export default function AboutHeroSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] mt-94 mb-41 px-36">
      <img src={israel} alt="" className="w-74 h-auto -mb-16 z-3" />

      <div className="flex flex-col w-full px-21 pt-25 pb-44 rounded-[20px] bg-[#2E2E2E]">
        <div className=" flex justify-between gap-15">
          <h1 className="text-[140px] w-fit font-vina-sans text-white leading-[88%] -tracking-[2px] -mt-4">
            pastor.
            <br /> Designer.
            <br /> Strategist
          </h1>

          <div className="flex flex-col">
            <p className="text-white text-sm font-geist">
              I am a Product Designer with over 6 years of experience in
              designing digital products. I have a knack for solving complex
              user problems with a research-driven approach. Alongside my
              interest in research, I recently became a lot more fascinated with
              Product Strategy and have been actively learning and delivering
              value in that line.
              <br />
              <span className="mt-4 block">
                I have a proven track record of designing products from zero
                users to thousands.
              </span>
            </p>
            <button className=" flex items-center mt-10 rounded-2xl py-6 px-8 bg-[#94E1CA] text-sm leading-none cursor-pointer w-fit font-geist font-semibold active:scale-98 duration-100">
              Work with me
              <img src={arrow} alt="" className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between mt-17">
          <p className="text-white text-sm font-geist w-2/5">
            I don’t just think design and aesthetics, I’m also keen of
            recognizing user needs and solving them while catering to business
            and stakeholder expectations or projections.
          </p>
          <p className="text-white text-sm font-geist w-2/5">
            With a background in Brand Identity and Marketing design, I’ve
            evolved from working in generalist design settings to being a lot
            more research and data driven in my approach to delivering value in
            UX Design.
          </p>
        </div>

        <h1 className=" w-full font-vina-sans text-[114px] text-[#FFF0C1] mt-26 -tracking-[2%] leading-[88%]">
          product designer with 7+ years of experience. pastor to a vibrant
          community of believers. currently exploring product coaching as a new
          way to build people.
        </h1>
      </div>
    </section>
  );
}
