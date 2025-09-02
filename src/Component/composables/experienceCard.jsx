export default function ExperienceCard({
  company,
  role,
  description,
  logo,
  bgColor,
  color,
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid #3F3F3F",
        "--hover-bg": bgColor,
        "--hover-color": color || "#FFFFFF",
      }}
      className={`width-full flex items-center justify-between py-12 px-14 group text-white bg-[#2E2E2E] hover:[background-color:var(--hover-bg)] hover:[color:var(--hover-color)] hover:cursor-pointer transition-all duration-300`}
    >
      <div className="flex flex-col gap-11 w-124 max-w-6/10">
        <div className="flex flex-col gap-1">
          <h2 className="font-vina-sans text-4xl tracking-tight">{company}</h2>
          <p className="text-base font-geist tracking-tight">{role}</p>
        </div>

        {description && (
          <p className="text-base font-geist tracking-tight">{description}</p>
        )}
      </div>

      <img
        src={logo}
        alt=""
        className="w-23 group-hover:mr-[100px] duration-500 shadow h-23 object-contain rounded-3xl"
      />
    </div>
  );
}
