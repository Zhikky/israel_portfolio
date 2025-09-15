export default function DescriptionSection({pen}) {
  return (
    <div className="w-full max-w-163 flex flex-col gap-7.75">
      <p className="text-[#FFF0C1] font-vina-sans text-[64px] leading-13.75">
        A learning & education management system to cater for the needs & flaws
        of the traditional education system
      </p>
      <div className="flex gap-7 justify-between">
        <button className="w-fit font-vina-sans text-base leading-[0.95rem] py-2 px-2.5 rounded-xl flex items-center gap-2 bg-[#42FFB7] border-4">
          <img src={pen} alt="pen" width="20px" className="object-contain" />
          UI DESIGNER
        </button>
        <button className="w-fit font-vina-sans text-base leading-[0.95rem] py-2 px-2.5 rounded-xl flex items-center gap-2 bg-[#9EE5FF] border-4">
          <img src={pen} alt="pen" width="20px" className="object-contain" />
          UX RESEARCHER
        </button>
        <button className="w-fit font-vina-sans text-base leading-[0.95rem] py-2 px-2.5 rounded-xl flex items-center gap-2 bg-[#FFF0C1] border-4">
          <img src={pen} alt="pen" width="20px" className="object-contain" />
          UX DESIGNER
        </button>
        <button className="w-fit font-vina-sans text-base leading-[0.95rem] py-2 px-2.5 rounded-xl flex items-center gap-2 bg-[#F0BFFF] border-4">
          <img src={pen} alt="pen" width="20px" className="object-contain" />
          INFORMATION ARCHITECT
        </button>
      </div>
    </div>
  );
}
