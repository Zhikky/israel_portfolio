export default function ProfileCard({ icon, role, color }) {
  return (
    <div className="flex rounded-3xl bg-white p-1 h-fit">
      <div
        style={{ backgroundColor: color }}
        className={` border-4 border-solid border-black rounded-3xl px-6 py-4  flex items-center gap-2`}
      >
        {icon && <img src={icon} alt="Profile" className="w-7 h-7" />}
        <span className="font-vina-sans text-3xl leading-none">{role}</span>
      </div>
    </div>
  );
}
