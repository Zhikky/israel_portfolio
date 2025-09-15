import image1 from "../../../assets/projects image/image 21.png";

export default function ResearchProcess() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Research Process
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-6xl leading-13.75 w-120">
          GAINING INSIGHT INTO THE TRADITIONAL EDUCATION SYSTEM.
        </p>

        <div className="flex justify-between">
          <div className="flex flex-col w-[40%] max-w-100 gap-4">
            <p className=" font-geist text-white text-sm w-full text-justify">
              The design sprint started with itemising the stakeholder we were
              designing solutions for and then moving on to begin qualitative
              interviews with them. We decided that we were going to design for
              the:
            </p>
            <ol className="font-geist text-white text-sm w-full text-justify flex flex-col gap-4">
              <li>1. School administrator</li>
              <li>2. Staff</li>
              <li>3. Students</li>
              <li>4. Guardians</li>
            </ol>
          </div>
          <div className="flex flex-col w-[40%] max-w-100 gap-4">
            <p className=" font-geist text-white text-sm w-full text-justify">
              Our primary means of recruitment for the study was to reach out to
              members of any of these stakeholder groups that we could find in
              our locality (a mistake that we subsequently learnt not to make
              anymore as this wouldn’t reflect the heterogeneity of educational
              systems across different localities and nationalities).
            </p>
            <p className=" font-geist text-white text-sm w-full text-justify">
              We majorly had extensive period of user interviews with the
              respondents and got quite some insight into how the educational
              system primarily in Nigeria across all strata of education works.
              So research was purely quantitative after which we had affinity
              maps taken and were able to narrow down to some specific areas of
              interest.
            </p>
          </div>
        </div>

        <img src={image1} alt="futureX" className="w-full object-cover" />
        <img src={image1} alt="futureX" className="w-full object-cover" />
        <img src={image1} alt="futureX" className="w-full object-cover" />
      </div>
    </div>
  );
}
