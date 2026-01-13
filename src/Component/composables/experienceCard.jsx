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
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
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
      className={`w-full relative 
        flex items-center 
        min-h-auto md:min-h-50 
        justify-between 
        gap-6 md:gap-0
        py-8 sm:py-8 md:py-12 
        px-4.5 sm:px-6 md:px-10 lg:px-14 
        text-white bg-[#2E2E2E] 
        hover:[background-color:var(--hover-bg)] 
        hover:[color:var(--hover-color)] 
        hover:cursor-pointer transition-all duration-300`}
    >
      {/* Text Content */}
      <div className="flex flex-col gap-6 md:gap-11 w-[70%] max-w-[400px] md:w-124 md:max-w-6/10">
        <div className="flex flex-col gap-1">
          <h2 className="font-vina-sans 
            text-2xl sm:text-3xl lg:text-4xl 
            tracking-tight">
            {company}
            {companyFormer && (
              <span 
                style={{ color: isInside ? "#FFFFFF63" : "#5D5D5D" }}
                className="block sm:inline"
              >
                {" "}
                {companyFormer}
              </span>
            )}
          </h2>
          <p className="text-sm sm:text-base font-geist tracking-tight">
            {role}
          </p>
        </div>

        {description && (
          <p className="text-sm sm:text-base font-geist tracking-tight leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Logo - Following cursor on desktop hover */}
      {isInside && (
        <img
          src={logo}
          alt={`${company} logo`}
          style={{
            top: pos.y,
            left: pos.x,
            transform: "translate(-50%, -50%)",
          }}
          className="hidden md:block w-20 lg:w-23 h-20 lg:h-23 
            z-2 shadow object-contain rounded-2xl lg:rounded-3xl 
            absolute pointer-events-none transition-transform 
            rotate-12 duration-100"
        />
      )}
      
      {/* Logo - Static position when not hovering (desktop) or always visible (mobile) */}
      {!isInside && (
        <img
          src={logo}
          alt={`${company} logo`}
          className="hidden md:block w-12 h-12 sm:w-20 sm:h-20 lg:w-23 lg:h-23 
            z-2 shadow object-contain 
            rounded-xl lg:rounded-3xl 
            pointer-events-none
            md:flex-shrink-0"
        />
      )}

       <img
          src={logo}
          alt={`${company} logo`}
          className="md:hidden w-12 h-12 sm:w-20 sm:h-20 lg:w-23 lg:h-23 
            z-2 shadow object-contain 
            rounded-xl lg:rounded-3xl 
            pointer-events-none
            md:flex-shrink-0"
        />
    </div>
  );
}
