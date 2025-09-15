import project1 from "../../../assets/projects/project1.webp";

export default function TitleSection({ title }) {
  return (
    <div className="w-full flex flex-col items-center justify-center relative h-fit mt-82">
      <h1 className=" top-20 w-fit text-white font-vina-sans text-[12rem] tracking-tight leading-[180px]">
        {title}
      </h1>
      <div
        style={{ color: "#FFF0C1" }}
        className={`w-full flex flex-col items-center justify-between -mt-6 px-36.25 mb-17 z-5`}
      >
        <div className="w-full max-w-[1142px] flex flex-col items-center justify-between bg-[#2E2E2E] rounded-[20px]">
          <div className="flex flex-col w-full gap-10 px-23.5 pt-13 justify-between overflow-hidden">
            <img
              src={project1}
              className="w-full object-cover object-top h-135"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
