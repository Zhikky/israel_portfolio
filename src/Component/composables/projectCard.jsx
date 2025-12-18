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
  console.log(tags);

  return (
    <div
      style={{
        top: topValue,
        height: height ? height : "auto",
        paddingTop: paddingTop ? paddingTop : "0px",
      }}
      className={`w-full sticky flex flex-col items-center justify-between h-162  px-36.25  z-5 `}
    >
      <div className="w-full max-w-[1142px] flex flex-col items-center justify-between shadow-[0px_-7px_10px_0px_#00000025] bg-[#2E2E2E] rounded-[20px]">
        <div className="flex flex-col w-full max-w-3xl gap-10 pt-10 justify-between overflow-hidden">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-80">
              <h2 className="text-2xl pb-2 text-white font-geist font-medium">
                {title}
              </h2>
              <p className="text-base leading-6 font-semibold text-[#FFF0C1]">
                {description}
                {description2 && (
                  <span className="text-white font-normal">
                    {" "}
                    - {description2}
                  </span>
                )}
              </p>
            </div>

            <div className="flex flex-col gap-7.5 items-end mr-1">
              <div className="flex gap-4 justify-between">
                {tags.map((tag) => (
                  <button
                    key={tag.color}
                    style={{ backgroundColor: tag.color }}
                    className="text-base text-black font-vina-sans px-[10px] py-[15px] rounded-[10px] leading-none"
                  >
                    {tag.text}
                  </button>
                ))}
              </div>
              <NavLink
                to={path}
                className="font-geist text-base p-4 rounded-full text-white border-1 border-white hover:cursor-pointer hover:scale-103 duration-300"
              >
                Read case study
              </NavLink>
            </div>
          </div>

          <img
            src={projectImage}
            className="w-full object-cover object-top h-103"
          />
        </div>
      </div>
    </div>
  );
}
