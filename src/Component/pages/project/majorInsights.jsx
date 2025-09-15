export default function MajorInsights() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Major Insights
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[40%] max-w-100 gap-4">
            <ul className="font-geist text-white text-sm w-full text-justify flex flex-col list-disc pl-4">
              <li>
                Fundamentally, all academic institutions perform almost the same
                operation but there are some activities that some do and others
                do not and vice versa.
              </li>
              <li>
                Even though administrators have roles clearly distinct from
                academic or non-academic staff, some staff members still have
                administrative roles.
              </li>
              <li>
                Class notes really don’t change; they’re really just improved
                upon so there should be a means of picking up notes from when
                they were last updated and updating them.
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[40%] max-w-100 gap-4">
            <ul className="font-geist text-white text-sm w-full text-justify flex flex-col list-disc pl-4">
              <li>
                Within a geographical location (e.g. a country), virtually every
                academic institution uses the same curriculum so there could be
                overall class notes that schools could pick from and then tailor
                to meet specific academic needs.
              </li>
              <li>
                In this age of online courses, students prefer having access to
                a myriad of academic opportunities rather than the streamline
                traditional academic system e.g. running two programs in two
                different institutions.
              </li>
              <li>
                Grading criterion varies from school to school so customisation
                should be catered for Etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
