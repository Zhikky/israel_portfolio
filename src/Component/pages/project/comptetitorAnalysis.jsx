export default function CompetitorAnalysis() {
  return (
    <div className="flex flex-col justify-between gap-3 md:gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-2xl md:text-3xl lg:text-4xl tracking-[-2%] text-white">
        Competitor Analysis
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-8 lg:gap-10 w-full py-8 md:py-12 lg:py-18.75 px-4 md:px-16 lg:px-32.5 rounded-xl md:rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-lg md:text-xl lg:text-2xl leading-tight md:leading-7.5">
          TAKING A CUE FROM PLAYERS IN THE GAME.
        </p>

        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          <p className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px]">
            I looked through other academic solutions in the market similar to
            what we were developing and tried to see ideas that we could glean
            from them and blindspots that we could provide solutions for. These
            included Coursera, Khan Academy, Google Classroom, Udacity, EdX etc
          </p>

          <div className="flex flex-col w-full gap-2 md:gap-3">
            <h3 className="text-[#FFF0C1] font-vina-sans text-lg md:text-xl lg:text-2xl">
              Ideas
            </h3>
            <ul className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px] list-disc ml-6 md:ml-8 flex flex-col gap-1.5 md:gap-2">
              <li>Curriculum-based structure for contents.</li>
              <li>Use of videos and texts for classes.</li>
              <li>
                Platforms are suited for learning but not school management and
                administration.
              </li>
              <li>Ability to take assessments.</li>
              <li>
                Open system in which almost anybody can create a course and
                almost anybody can access the course whether paid or free.
              </li>
              <li>
                Notification system to notify students of any activity ongoing
                in an enrolled class, course or program.
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full gap-2 md:gap-3">
            <h3 className="text-[#FFF0C1] font-vina-sans text-lg md:text-xl lg:text-2xl">
              Blindspots
            </h3>
            <ul className="text-white font-geist text-sm md:text-base leading-relaxed md:leading-[25px] list-disc ml-6 md:ml-8 flex flex-col gap-1.5 md:gap-2">
              <li>Guardians not catered for.</li>
              <li>
                No platform for real-time online classes i.e. all classes are
                pre-recorded and pre-edited.
              </li>
              <li>
                Platforms are suited for learning but not school management and
                administration.
              </li>
              <li>
                No opportunity for student-to-student communication which could
                aid learning and foster knowledge sharing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}