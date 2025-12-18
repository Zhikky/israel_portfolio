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
    <div className="w-[80%] max-w-[1142px] px-36.5 flex flex-col gap-7.75">
      <p className="text-[#FFF0C1] font-vina-sans text-6xl leading-13.75">
        {description}
      </p>
      <div className="flex flex-col gap-7.75 w-full">
        {role && (
          <div className="w-full flex justify-between items-center ">
            <p className="text-white font-geist text-[23px] flex flex-row gap-2 items-center ">
              <img className="w-6 h-6" src={userIcon} />
              Role:{" "}
            </p>
            <div className="w-[70%] flex gap-5">
              {role.map((roles, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: roles.color }}
                  className="font-vina-sans text-base p-2.5 rounded-[10px] leading-none "
                >
                  {roles.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {theme && (
          <div className="w-full flex justify-between items-center ">
            <p className="text-white font-geist text-[23px] flex flex-row gap-2 items-center ">
              <img className="w-6 h-6" src={themeIcon} />
              Theme:{" "}
            </p>
            <div className="w-[70%] flex gap-2.5">
              {theme.map((themes, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: themes.color }}
                  className="font-vina-sans text-base p-2.5 rounded-[10px] leading-none "
                >
                  {themes.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {tools && (
          <div className="w-full flex justify-between items-center ">
            <p className="text-white font-geist text-[23px] flex flex-row gap-2 items-center ">
              <img className="w-6 h-6" src={toolsIcon} />
              Tools:{" "}
            </p>
            <div className="w-[70%] flex gap-2.5">
              {tools.map((tools, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: tools.color }}
                  className="font-vina-sans text-base p-2.5 rounded-[10px] leading-none "
                >
                  {tools.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {research && (
          <div className="w-full flex justify-between items-center ">
            <p className="text-white font-geist text-[23px] flex flex-row gap-2 items-center ">
              <img className="w-6 h-6" src={researchIcon} />
              Research:{" "}
            </p>
            <div className="w-[70%] flex gap-2.5">
              {research.map((researchs, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: researchs.color }}
                  className="font-vina-sans text-base p-2.5 rounded-[10px] leading-none "
                >
                  {researchs.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {timeline && (
          <div className="w-full flex justify-between items-center ">
            <p className="text-white font-geist text-[23px] flex flex-row gap-2 items-center ">
              <img className="w-6 h-6" src={timelineIcon} />
              Timeline:
            </p>
            <div className="w-[70%] flex gap-2.5">
              {timeline.map((timelines, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: timelines.color }}
                  className="font-vina-sans text-base p-2.5 rounded-[10px] leading-none "
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
