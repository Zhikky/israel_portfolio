import arrow from "../../../assets/Vector 1.png";
import nft from "../../../assets/nft.png";
import apartment from "../../../assets/apartment.png";

export default function UxResearch() {
  return (
    <div className="flex flex-col justify-between gap-16 w-full h-fit max-w-[1440px] px-36 mt-60">
      <h2 className="font-vina-sans text-4xl tracking-[-2%] text-white">
        UX Research Case Studies & Articles
      </h2>

      <div className="flex justify-between gap-10.5 w-full">
        <a
          href="https://medium.com/@aderael/designing-for-easier-apartment-search-and-rentals-a-ux-research-case-study-a517c3c8d804"
          target="_blank"
          className="w-full min-h-142.5 flex-1 px-8.5 py-8 flex flex-col justify-end rounded-4xl bg-[#2E2E2E] cursor-pointer hover:translate-y-1  duration-300"
        >
          <div className="flex flex-col gap-5.5 w-full">
            <img src={apartment} width="100%" />
            <h2 className="font-vina-sans text-[34px] max-w-[85%] leading-[36px] text-[#FFF0C1]">
              Designing for easier apartment search and rentals - A UX Research
              Case Study
            </h2>
            <a
              href="https://medium.com/@aderael/designing-for-easier-apartment-search-and-rentals-a-ux-research-case-study-a517c3c8d804"
              target="_blank"
              className="flex items-center gap-1 font-geist text-base font-medium tracking-[-2%] leading-none font w-fit py-3 px-4 rounded-[8px] bg-white cursor-pointer hover:translate-y-1 duration-300"
            >
              Read on medium
              <img src={arrow} alt="arrow" width="8px" />
            </a>
          </div>
        </a>
        <a
          href="https://medium.com/@aderael/designing-for-better-nft-adoption-by-improving-customer-education-a-ux-research-case-study-602bb2f350c4"
          target="_blank"
          className="w-full min-h-142.5 flex-1 px-8.5 py-8 flex flex-col justify-end rounded-4xl bg-[#2E2E2E] cursor-pointer hover:translate-y-1 duration-300"
        >
          <div className="flex flex-col gap-5.5 w-full">
            <img src={nft} width="100%" />
            <h2 className="font-vina-sans text-[34px] max-w-[87%] leading-[36px] text-[#FFF0C1]">
              Designing for better NFT adoption by improving customer education
              — A UX Research Case Study.
            </h2>
            <a
              href="https://medium.com/@aderael/designing-for-better-nft-adoption-by-improving-customer-education-a-ux-research-case-study-602bb2f350c4"
              target="_blank"
              className="flex items-center gap-2 font-geist text-base font-medium tracking-[-2%] leading-none font w-fit py-3 px-4 rounded-[8px] bg-white cursor-pointer hover:translate-y-1 duration-300"
            >
              Read on medium
              <img src={arrow} alt="arrow" width="8px" />
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}
