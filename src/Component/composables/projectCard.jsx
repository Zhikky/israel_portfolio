import { NavLink } from "react-router-dom";
export default function ProjectCard({
  projectImage,
  tags,
  topValue,
  title = "Project Title",
  description = "This is a brief description of the project.",
  description2,
  paddingTop,
  height,
  path,
}) {
  return (
    <div
      style={{
        top: topValue,
        height: height ? height : "auto",
        paddingTop: window.innerWidth >= 768 
      ? (paddingTop ? paddingTop : "0px")
      : "24px", // 24px on mobile, original value on md+
      }}
      className="w-full sticky flex flex-col items-center justify-between 
        h-auto md:h-162
        px-9 sm:px-8 md:px-16 lg:px-36.25
        z-5"
    >
      <div
        className="w-full max-w-[1142px] flex flex-col items-center justify-between 
        border-2 border-[#1A1A1A] bg-[#2E2E2E] 
        rounded-xl sm:rounded-[20px]"
      >
        <div
          className="flex flex-col w-full max-w-3xl
          gap-6 sm:gap-8 md:gap-10 px-4 lg:px-0 pt-6.5 justify-between overflow-hidden"
        >
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6.5 justify-between">
            {/* Title and Tags */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl text-white leading-none font-geist font-medium">
                {title}
              </h2>
              <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: tag.color }}
                    className="text-sm sm:text-base text-black font-vina-sans 
                      px-2 py-2 sm:px-[10px] sm:py-[15px] 
                      rounded-[10px] leading-none whitespace-nowrap"
                  >
                    {tag.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Description and CTA */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-6">
              <p
                className="text-sm sm:text-base font-geist 
                w-full md:w-[55%] 
                leading-5 sm:leading-6 
                font-semibold text-[#FFF0C1]"
              >
                {description}
                {description2 && (
                  <span className="text-white font-normal">
                    {" "}
                    - {description2}
                  </span>
                )}
              </p>
              <NavLink
                to={path}
                className="rounded-[50px] text-white border-2 border-white mt-4 lg:mt-0 
                  py-3 px-6 sm:py-4 sm:px-7 md:py-6 md:px-8 
                  text-base sm:text-lg 
                  leading-none cursor-pointer w-fit text-center
                  font-geist font-semibold 
                  hover:scale-101 duration-200 
                  hover:bg-white hover:text-black
                  active:scale-99"
              >
                Read case study
              </NavLink>
            </div>
          </div>

          {/* Project Image */}
          <img
            src={projectImage}
            alt={title}
            className="w-full object-cover object-top 
              h-48 sm:h-64 md:h-80 lg:h-103
              rounded-t-sm sm:rounded-t-xl"
          />
        </div>
      </div>
    </div>
  );
}
