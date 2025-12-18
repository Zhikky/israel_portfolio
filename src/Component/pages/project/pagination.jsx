import { NavLink } from "react-router-dom";

// import arrow from "../../../assets/image 6.png";

export default function Pagination({ prevPageContent, nextPageContent }) {
  return (
    <div className="flex flex-col justify-between gap-16 w-full h-fit max-w-[840px]  mt-35 mb-60">
      <div className="flex justify-between gap-10.5 w-full">
        <NavLink
          to={prevPageContent ? `/portfolio/${prevPageContent.path}` : ""}
          className="w-full flex-1 flex flex-col items-center duration-300 hover:-translate-y-4 hover:cursor-pointer"
        >
          <h3
            style={{ color: prevPageContent ? "#FFF0C1" : "#424242" }}
            className="text-[98px] font-vina-sans tracking-tight leading-none -mb-5"
          >
            Previous
          </h3>
          <div
            style={{
              height: prevPageContent ? "" : "401px",
            }}
            className="w-full min-h-97.75 px-9.25 py-15 flex flex-col gap-3.25 rounded-4xl bg-[#2E2E2E]"
          >
            {prevPageContent && (
              <img
                src={prevPageContent.img}
                alt="next"
                className="w-full h-57.5 object-cover"
              />
            )}
            {prevPageContent && (
              <p className="text-white font-vina-sans text-[38.61px] tracking-tighter leading-none ">
                {prevPageContent.projectName}
              </p>
            )}
          </div>
        </NavLink>

        <NavLink
          to={nextPageContent ? `/portfolio/${nextPageContent.path}` : ""}
          className="w-full flex-1 flex flex-col items-center duration-300 hover:-translate-y-4 hover:cursor-pointer"
        >
          <h3
            style={{ color: nextPageContent ? "#94E1CA" : "#424242" }}
            className="text-[98px] font-vina-sans tracking-tight leading-none -mb-5"
          >
            Next
          </h3>
          <div
            style={{
              height: nextPageContent ? "" : "401px",
            }}
            className="w-full min-h-97.75 px-7.5 py-15 flex flex-col gap-3.25 rounded-4xl bg-[#2E2E2E]"
          >
            {nextPageContent && (
              <img
                src={nextPageContent.img}
                alt="next"
                className="w-full h-57.5 object-cover"
              />
            )}
            {nextPageContent && (
              <p className="text-white font-vina-sans text-[38.61px] tracking-tighter leading-none ">
                {nextPageContent.projectName}
              </p>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}
