import { NavLink } from "react-router-dom";

import arrow from "../../../assets/image 6.png";

export default function Pagination() {
  return (
    <div className="flex flex-col justify-between gap-16 w-full h-fit max-w-[1440px] px-36 mt-35 mb-60">
      <div className="flex justify-between gap-10.5 w-full">
        <NavLink
          to="/portfolio/futurex"
          className="w-full flex-1 flex flex-col items-center duration-300 hover:-translate-y-4 hover:cursor-pointer"
        >
          <h3 className="text-[#424242] text-[8.25em] font-vina-sans tracking-[-2%] -mb-15">
            Previous
          </h3>
          <div className="w-full min-h-142.5  px-8.5 py-8 flex flex-col justify-end rounded-4xl bg-[#2E2E2E]"></div>
        </NavLink>

        <NavLink
          to="/portfolio/futurex"
          className="w-full flex-1 flex flex-col items-center duration-300 hover:-translate-y-4 hover:cursor-pointer"
        >
          <h3 className="text-[#94E1CA] text-[8.25rem] font-vina-sans tracking-[-2%] -mb-15">
            Next
          </h3>
          <div className="w-full min-h-142.5 px-12.5 py-20.75 flex flex-col gap-4 rounded-4xl bg-[#2E2E2E]">
            <img
              src={arrow}
              alt="next"
              className="w-full h-77.25 object-cover"
            />
            <p className="text-white font-vina-sans text-[52px]">Jettify</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
