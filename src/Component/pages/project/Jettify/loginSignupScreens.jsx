import loginProcess from "../../../../assets/projectsImage/Jettify/loginProcess.png";

export default function LoginSignupScreens() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        Login Sign-up Screens
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-6.25">
          For easy login, users can either do so via email or phone number and a
          password or with a fingerprint authentication. A 4 digit pin is also
          required during sign up and is subsequently used for transactions in
          the app such as transferring funds and funding wallet.
        </p>
        <img
          src={loginProcess}
          alt="futureX"
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}
