import { NavLink } from "react-router-dom";

// import arrow from "../../../assets/image 6.png";

export default function Pagination({ prevPageContent, nextPageContent }) {
  return (
    <div className="flex flex-col justify-between gap-8 md:gap-16 w-full h-fit max-w-[840px] mt-[200px] md:mt-20 lg:mt-35 mb-20 md:mb-40 lg:mb-60 px-[26px] md:px-8 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10.5 w-full">
        <NavLink
          to={prevPageContent ? `/portfolio/${prevPageContent.path}` : ""}
          className="w-full flex-1 flex flex-col items-center duration-300 hover:-translate-y-2 md:hover:-translate-y-4 hover:cursor-pointer"
        >
          <h3
            style={{ color: prevPageContent ? "#FFF0C1" : "#424242" }}
            className="text-5xl md:text-7xl lg:text-[98px] font-vina-sans tracking-tight leading-none -mb-3 md:-mb-5"
          >
            Previous
          </h3>
          <div
            style={{
              height: prevPageContent ? "" : "250px",
            }}
            className="w-full md:min-h-97.75 px-6 py-8 md:px-9.25 md:py-15 flex flex-col gap-2 md:gap-3.25 rounded-2xl md:rounded-4xl bg-[#2E2E2E]"
          >
            {prevPageContent && (
              <img
                src={prevPageContent.img}
                alt="next"
                className="w-full h-40 md:h-57.5 object-cover"
              />
            )}
            {prevPageContent && (
              <p className="text-white font-vina-sans text-2xl md:text-3xl lg:text-[38.61px] tracking-tighter leading-none">
                {prevPageContent.projectName}
              </p>
            )}
          </div>
        </NavLink>

        <NavLink
          to={nextPageContent ? `/portfolio/${nextPageContent.path}` : ""}
          className="w-full flex-1 flex flex-col items-center duration-300 hover:-translate-y-2 md:hover:-translate-y-4 hover:cursor-pointer"
        >
          <h3
            style={{ color: nextPageContent ? "#94E1CA" : "#424242" }}
            className="text-5xl md:text-7xl lg:text-[98px] font-vina-sans tracking-tight leading-none -mb-3 md:-mb-5"
          >
            Next
          </h3>
          <div
            style={{
              height: nextPageContent ? "" : "250px",
            }}
            className="w-full md:min-h-97.75 px-6 py-8 md:px-7.5 md:py-15 flex flex-col gap-2 md:gap-3.25 rounded-2xl md:rounded-4xl bg-[#2E2E2E]"
          >
            {nextPageContent && (
              <img
                src={nextPageContent.img}
                alt="next"
                className="w-full h-40 md:h-57.5 object-cover"
              />
            )}
            {nextPageContent && (
              <p className="text-white font-vina-sans text-2xl md:text-3xl lg:text-[38.61px] tracking-tighter leading-none">
                {nextPageContent.projectName}
              </p>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}