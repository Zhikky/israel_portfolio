import userFlow1 from "../../../../assets/projectsImage/Zennor/userFlow1.png";
import userFlow2 from "../../../../assets/projectsImage/Zennor/userFlow2.png";

export default function UserFlow() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        User Flow
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <img
          src={userFlow1}
          alt="User flow 1"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={userFlow2}
          alt="User flow 2"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
