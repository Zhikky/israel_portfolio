export default function UserResearch() {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-fit max-w-[840px] mt-18">
      <h2 className="font-vina-sans text-2xl tracking-[-2%] text-white">
        User Research
      </h2>

      <div className="flex flex-col justify-between gap-10 w-full py-18.75 px-32.5 rounded-2xl bg-[#2E2E2E]">
        <p className="text-white font-geist text-base leading-6.25">
          Since my users were the admin and his business partners, the user
          research didn't have to take too long and I was able to gather
          meaningful insight as to their culture (their way of like and mode of
          working), previous experiences and the context in which the app would
          be in use. This would make it easier to tailor the user experience to
          meet their needs effectively. Two important things I noted were:
        </p>
        <p className="text-white font-geist text-base leading-6.25">
          1. The admin isn't fully comfortable with automating all transactions
          so he would rather have the processes semi-automated i.e. he'd be
          consistently involved in stating the status of each and every order.
        </p>
        <p className="text-white font-geist text-base leading-6.25">
          2. The admin as well as his business partners are not exactly
          tech-savvy folks so in the words of the project manager,{" "}
          <span className="text-[#FFB05F]">
            "Israel, my uncle is not exactly a computer person like that, please
            make it as simple as possible for him."
          </span>
        </p>
        <p className="text-white font-geist text-base leading-6.25">
          This meant that I had to stick to consistent and very familiar
          interactions and affordances and while this didn't look like so big of
          a deal initially, there were points were we had to find a balance
          between making it simple, functional and aesthetic
        </p>
        <div className="flex flex-col mt-14">
          <p className="font-geist font-bold leading-0 text-[#8E8E8E] text-4xl">
            "
          </p>
          <p className="font-rethink-sans italic tracking-tight text-[#8E8E8E] text-[18px]">
            Israel, my uncle is not exactly a computer person like that, please
            make it as simple as possible for him.
          </p>
          <p className="inline font-geist font-bold text-[#8E8E8E] text-4xl leading-0  self-end">
            "
          </p>
        </div>
      </div>
    </div>
  );
}
