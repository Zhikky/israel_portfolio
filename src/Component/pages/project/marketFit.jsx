export default function MarketFit() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Market Fit
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-6xl leading-13.75 w-133">
          OUR RUDE SHOCK AND NEED FOR A REALIGNMENT
        </p>

        <div className="flex justify-between">
          <p className=" font-geist text-white text-sm w-[40%] max-w-100">
            Development and Deployment of FutureX generally was done in an agile
            environment so the system was being deployed as design and
            development was ongoing. For the school we had most of our
            respondents from, we had our system tailored for their needs. Even
            though we needed to do a bit of training and onboarding to get users
            acquitted with the system, catching up wasn’t so much of a problem
            for them due to mental models that had been previously established.
          </p>
          <p className=" font-geist text-white text-sm w-[40%] max-w-100">
            Our deployment continued with other schools that operated almost the
            same administration and curriculum as the first school and we had
            similar results. Things however began to get interesting when we
            began deployment to Private-owned schools. We realised that these
            schools ran curriculums different from Government-owned schools;
            although not entirely, but significantly as well as their
            administrative operations. Therefore, we couldn’t carry on with
            deployment for schools other that government-owned schools and with
            this we already made the inference that we would come across similar
            challenges with schools or educational institutions outside our
            locality or nationality. Hence, the need to go back to the drawing
            board and work on our user research more extensively.
          </p>
        </div>

        <div className="flex justify-between">
          <p className=" font-vina-sans text-[#FFF0C1] text-[40px] w-[55%] tracking-[-2%]  leading-[93%]">
            “After extensive deliberations, we decided to work on a version 2
            for FutureX. However, we decided to have a definite user group which
            would be government-owned academic institutions to address specific
            problems or simplify current processes for more effective results”.
          </p>
          <p className=" font-geist text-white text-sm w-[40%] max-w-100">
            I also decided to refine the design system for the version 2 in
            order to ensure consistency in design elements, have a more
            simplistic and modern look and most of all to aid hand-off to
            developers and collaboration in the design team.
          </p>
        </div>
      </div>
    </div>
  );
}
