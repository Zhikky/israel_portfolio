import jettifyOnboardingScreens from "../../../../assets/projectsImage/Jettify/jettifyOnboardingScreens.png";

export default function OnboardingScreens() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-[46px] md:mt-12 lg:mt-18 px-[26px] md:px-8 lg:px-0">
      <h2 className="font-vina-sans text-xl md:text-2xl tracking-[-2%] text-white">
        Onboarding Screens
      </h2>

      <div className="flex flex-col justify-between gap-6 md:gap-10 w-full py-[26px] px-[26px] md:py-18.75 md:px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-sm md:text-base leading-[22px] md:leading-6.25">
          I decided to use pictures as compared to the stereotype of
          illustrations to evoke emotions of happiness in relation to the usage
          of the mobile app with crystal clear descriptions as to the things
          that can be done via the Jetiffy app.
        </p>
        <img
          src={jettifyOnboardingScreens}
          alt="Onboarding screens"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
