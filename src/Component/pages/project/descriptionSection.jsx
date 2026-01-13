import userIcon from "../../../assets/roleIcons/userIcon.png";
import researchIcon from "../../../assets/roleIcons/research.png";
import themeIcon from "../../../assets/roleIcons/theme.png";
import timelineIcon from "../../../assets/roleIcons/timeline.png";
import toolsIcon from "../../../assets/roleIcons/tools.png";

export default function DescriptionSection({
  description,
  role,
  theme,
  tools,
  research,
  timeline,
}) {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] max-w-[1142px] px-4 sm:px-8 md:px-16 lg:px-36.5 flex flex-col gap-4 md:gap-6 lg:gap-7.75">
      <p className="text-[#FFF0C1] font-vina-sans text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-relaxed lg:leading-13.75">
        {description}
      </p>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-7.75 w-full">
        {role && (
          <div className="w-full flex justify-between items-start md:items-center gap-2 md:gap-4">
            <p className="text-white min-w-[110px] font-geist text-lg md:text-xl lg:text-[23px] flex flex-row gap-2 items-center whitespace-nowrap">
              <img className="w-5 h-5 md:w-6 md:h-6" src={userIcon} alt="Role icon" />
              Role:{" "}
            </p>
            <div className="w-full md:w-[70%] flex gap-1 md:gap-3 lg:gap-5 flex-wrap">
              {role.map((roles, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: roles.color }}
                  className="font-vina-sans text-sm md:text-base p-2 md:p-2.5 rounded-[8px] md:rounded-[10px] leading-none"
                >
                  {roles.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {theme && (
          <div className="w-full flex justify-between items-start md:items-center gap-2 md:gap-4">
            <p className="text-white min-w-[110px] font-geist text-lg md:text-xl lg:text-[23px] flex flex-row gap-2 items-center whitespace-nowrap">
              <img className="w-5 h-5 md:w-6 md:h-6" src={themeIcon} alt="Theme icon" />
              Theme:{" "}
            </p>
            <div className="w-full md:w-[70%] flex gap-1 md:gap-2.5 flex-wrap">
              {theme.map((themes, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: themes.color }}
                  className="font-vina-sans text-sm md:text-base p-2 md:p-2.5 rounded-[8px] md:rounded-[10px] leading-none"
                >
                  {themes.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {tools && (
          <div className="w-full flex justify-between items-start md:items-center gap-2 md:gap-4">
            <p className="text-white min-w-[110px] font-geist text-lg md:text-xl lg:text-[23px] flex flex-row gap-2 items-center whitespace-nowrap">
              <img className="w-5 h-5 md:w-6 md:h-6" src={toolsIcon} alt="Tools icon" />
              Tools:{" "}
            </p>
            <div className="w-full md:w-[70%] flex gap-1 md:gap-2.5 flex-wrap">
              {tools.map((tools, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: tools.color }}
                  className="font-vina-sans text-sm md:text-base p-2 md:p-2.5 rounded-[8px] md:rounded-[10px] leading-none"
                >
                  {tools.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {research && (
          <div className="w-full flex justify-between items-start md:items-center gap-2 md:gap-4">
            <p className="text-white min-w-[110px] font-geist text-lg md:text-xl lg:text-[23px] flex flex-row gap-2 items-center whitespace-nowrap">
              <img className="w-5 h-5 md:w-6 md:h-6" src={researchIcon} alt="Research icon" />
              Research:{" "}
            </p>
            <div className="w-full md:w-[70%] flex gap-1 md:gap-2.5 flex-wrap">
              {research.map((researchs, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: researchs.color }}
                  className="font-vina-sans text-sm md:text-base p-2 md:p-2.5 rounded-[8px] md:rounded-[10px] leading-none"
                >
                  {researchs.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {timeline && (
          <div className="w-full flex justify-between items-start md:items-center gap-2 md:gap-4">
            <p className="text-white min-w-[110px] font-geist text-lg md:text-xl lg:text-[23px] flex flex-row gap-2 items-center whitespace-nowrap">
              <img className="w-5 h-5 md:w-6 md:h-6" src={timelineIcon} alt="Timeline icon" />
              Timeline:
            </p>
            <div className="w-full md:w-[70%] flex gap-1 md:gap-2.5 flex-wrap">
              {timeline.map((timelines, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: timelines.color }}
                  className="font-vina-sans text-sm md:text-base p-2 md:p-2.5 rounded-[8px] md:rounded-[10px] leading-none"
                >
                  {timelines.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}