import jettifyOnboardingScreens from "../../../../assets/projectsImage/Jettify/jettifyOnboardingScreens.png"

export default function OnboardingScreens() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        Onboarding Screens
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-6.25">
          I decided to use pictures as compared to the stereotype of
          illustrations to evoke emotions of happiness in relation to the usage
          of the mobile app with crystal clear descriptions as to the things
          that can be done via the Jetiffy app.
        </p>
        <img
          src={jettifyOnboardingScreens}
          alt="futureX"
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
