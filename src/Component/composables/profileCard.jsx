export default function ProfileCard({ icon, role, color }) {
  return (
    <div className="flex rounded-2xl sm:rounded-3xl bg-white p-1 h-fit w-full sm:w-fit">
      <div
        style={{ backgroundColor: color }}
        className="border-3 sm:border-4 border-solid border-black 
          rounded-xl sm:rounded-3xl 
          px-4 py-1.25 sm:px-6 sm:py-4 
          flex items-center justify-center sm:justify-start
          gap-2 w-full"
      >
        {icon && (
          <img 
            src={icon} 
            alt="Profile icon" 
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" 
          />
        )}
        <span className="font-vina-sans 
          text-xl sm:text-2xl lg:text-3xl 
          leading-none whitespace-nowrap">
          {role}
        </span>
      </div>
    </div>
  );
}