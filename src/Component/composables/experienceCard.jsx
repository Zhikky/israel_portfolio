import { useState } from "react";

export default function ExperienceCard({
  company,
  companyFormer,
  role,
  description,
  logo,
  bgColor,
  color,
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left, // relative X inside container
      y: e.clientY - rect.top, // relative Y inside container
    });
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #3F3F3F",
        "--hover-bg": bgColor,
        "--hover-color": color || "#FFFFFF",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className={`width-full relative flex items-center justify-between py-12 px-14 text-white bg-[#2E2E2E] hover:[background-color:var(--hover-bg)] hover:[color:var(--hover-color)] hover:cursor-pointer transition-all duration-300`}
    >
      <div className="flex flex-col gap-11 w-124 max-w-6/10">
        <div className="flex flex-col gap-1">
          <h2 className="font-vina-sans text-4xl tracking-tight">
            {company}
            {companyFormer && (
              <span style={{ color: isInside ? "#FFFFFF63" : "#5D5D5D" }}>
                {" "}
                {companyFormer}
              </span>
            )}
          </h2>
          <p className="text-base font-geist tracking-tight">{role}</p>
        </div>

        {description && (
          <p className="text-base font-geist tracking-tight">{description}</p>
        )}
      </div>

      {isInside && (
        <img
          src={logo}
          alt=""
          style={{
            top: pos.y,
            left: pos.x,
            transform: "translate(-50%, -50%)",
          }}
          className="w-23 z-2 shadow h-23 object-contain rounded-3xl absolute pointer-events-none transition-transform rotate-12 duration-100"
        />
      )}
      
      {!isInside && <img
        src={logo}
        alt=""
        style={{
        }}
        className="w-23 z-2 shadow h-23 object-contain rounded-3xl pointer-events-none "
      />}
    </div>
  );
}
