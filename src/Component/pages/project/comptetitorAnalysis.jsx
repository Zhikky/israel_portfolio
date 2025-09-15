export default function CompetitorAnalysis() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Competitor Analysis
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-6xl leading-13.75 w-120">
          TAKING A CUE FROM PLAYERS IN THE GAME.
        </p>

        <div className="flex justify-between">
          <div className="flex flex-col w-[40%] max-w-100 gap-4">
            <p className=" font-geist text-white text-sm w-full text-justify">
              I looked through other academic solutions in the market similar to
              what we were developing and tried to see ideas that we could glean
              from them and blindspots that we could provide solutions for.
              These included Coursera, Khan Academy, Google Classroom, Udacity,
              EdX etc
            </p>

            <div className="flex flex-col w-full max-w-100">
              <p className=" font-geist text-white text-sm w-full text-justify">
                💡 Ideas
              </p>
              <ul className="font-geist text-white text-sm w-full flex flex-col list-disc pl-4">
                <li>Curriculum-based structure for contents.</li>
                <li>Use of videos and texts for classes.</li>
                <li>
                  Platforms are suited for learning but not school management
                  and administration.
                </li>
                <li>Ability to take assessments.</li>
                <li>
                  Open system in which almost anybody can create a course and
                  almost anybody can access the course whether paid or free.
                </li>
                <li>
                  {" "}
                  Notification system to notify students of any activity ongoing
                  in an enrolled class, course or program.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[40%] max-w-100">
            <p className=" font-geist text-white text-sm w-full text-justify">
              🎯 Blindspots
            </p>
            <ul className="font-geist text-white text-sm w-full flex flex-col list-disc pl-4">
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
