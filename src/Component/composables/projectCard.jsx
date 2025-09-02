export default function ProjectCard({
  projectImage,
  bgColor,
  topValue,
  title = "Project Title",
  highlight = "Highlight",
  year = "2023",
  description = "This is a brief description of the project.",
}) {
  return (
    <div
      style={{ color: bgColor, top: topValue }}
      className={`w-full sticky flex flex-col items-center justify-between shadow-[0px_-7px_4px_0px_#00000040] h-162 bg-[#2E2E2E] px-47`}
    >
      <div className="flex flex-col max-w-2xl gap-10 pt-13 justify-between overflow-hidden">
        <div className="flex justify-between items-center ">
          <p>{title}</p>
          <p>{highlight}</p>
          <p>{year}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm font-geist w-48 text-white">{description}</p>
          <button
            style={{ backgroundColor: bgColor }}
            className={`text-black text-xl px-8 py-4 font-vina-sans rounded-lg`}
          >
            read case study
          </button>
        </div>

        <img
          src={projectImage}
          className="w-full object-cover object-top h-103"
        />
      </div>
    </div>
  );
}
