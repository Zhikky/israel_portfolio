export default function TakeAway() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[1440px] px-36 mt-18">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        Take-Away
      </h2>

      <div className="flex flex-col justify-between gap-19 w-full py-18.75 px-10 rounded-2xl bg-[#2E2E2E]">
        <p className="text-[#FFF0C1] font-vina-sans text-6xl leading-13.75 w-133">
          WHAT DESIGNING AN ED-TECH SOLUTION IN AN AGILE SYSTEM HAS TAUGHT ME.
        </p>

        <div className="flex justify-between">
          <ul className="flex flex-col gap-4 font-geist text-white text-sm w-[40%] max-w-100 list-disc pl-4">
            <li>
              In creating a solution, it’s best to start from solving one
              problem first. From solving that problem well enough, you can
              begin to expand on that you have and solve more problems.
            </li>
            <li>
              You don’t know what you don’t know. As simple as this sounds,
              reality is you can never be really sure what the problem is until
              you are able to prove from your user research that there is an
              actual problem. Doesn’t even matter if you’ve been a part of that
              target market before. Remember, you are designing for users and
              not for yourself.
            </li>
          </ul>

          <ul className="font-geist text-white text-sm w-[40%] max-w-100 list-disc">
            <li>
              In determining your target location, also try to be specific. Fact
              is you can’t cater for the entire popdivation/populace. However,
              if you can decide what percentage of the population have a certain
              need, confirm that it is an actual need and solve it well enough,
              you’ll be doing a good job. What we could have done from the
              ground-up instead was to decide what exact problem we wanted to
              solve and not try to perform an overhaul of the educational
              system. We should have also decided who our target market was and
              provide our solution to be better suited for them.
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <p className=" font-vina-sans text-[#FFF0C1] text-6xl w-[55%] tracking-[-2%]  leading-[93%]">
            Thank You for reading through!✌️
          </p>
        </div>
      </div>
    </div>
  );
}
