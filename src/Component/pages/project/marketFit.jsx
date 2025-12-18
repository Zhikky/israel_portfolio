export default function MarketFit() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        Market Fit
      </h2>

      <div className="flex flex-col justify-between gap-14 w-full py-18.75 px-32.5  rounded-2xl bg-[#2E2E2E]">
        <h3 className="text-[#FFF0C1] font-vina-sans text-2xl leading-7.5">
          OUR RUDE SHOCK AND NEED FOR A REALIGNMENT
        </h3>

        <div className="flex flex-col gap-8 justify-between">
          <p className=" font-geist text-white text-base leading-[25px]">
            Development and Deployment of FutureX generally was done in an agile
            environment so the system was being deployed as design and
            development was ongoing. For the school we had most of our
            respondents from, we had our system tailored for their needs. Even
            though we needed to do a bit of training and onboarding to get users
            acquitted with the system, catching up wasn’t so much of a problem
            for them due to mental models that had been previously established.
          </p>
          <p className=" font-geist text-white text-base leading-[25px]">
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

        <div className="flex gap-14 mt-4 justify-between">
          <div className="flex flex-col">
            <p className="font-geist font-bold leading-0 text-[#8E8E8E] text-4xl">
              "
            </p>
            <p className="font-rethink-sans italic text-[#8E8E8E] text-base">
              “After extensive deliberations, we decided to work on a version 2
              for FutureX. However, we decided to have a definite user group
              which would be government-owned academic institutions to address
              specific problems or simplify current processes for more effective
              results”.
            </p>
            <p className="font-geist font-bold text-[#8E8E8E] text-4xl self-end">
              "
            </p>
          </div>
          <p className=" font-geist text-white text-base">
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
