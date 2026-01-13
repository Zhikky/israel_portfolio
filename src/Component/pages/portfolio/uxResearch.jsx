import arrow from "../../../assets/Vector 1.png";
import nft from "../../../assets/nft.png";
import apartment from "../../../assets/apartment.png";

export default function UxResearch() {
  return (
    <div className="flex flex-col justify-between gap-8 sm:gap-12 lg:gap-16 w-full h-fit max-w-[1440px] px-9 sm:px-12 md:px-20 lg:px-36 mt-40 sm:mt-32 md:mt-44 lg:mt-60">
      <h2 className="font-vina-sans text-2xl sm:text-3xl lg:text-4xl tracking-[-2%] text-white">
        UX Research Case Studies & Articles
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-10.5 w-full">
        <a
          href="https://medium.com/@aderael/designing-for-easier-apartment-search-and-rentals-a-ux-research-case-study-a517c3c8d804"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-auto lg:min-h-142.5 flex-1 px-6 py-6 sm:px-8.5 sm:py-8 flex flex-col justify-end rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2E2E2E] cursor-pointer hover:translate-y-1 duration-300 active:translate-y-2"
        >
          <div className="flex flex-col gap-4 sm:gap-5.5 w-full">
            <img src={apartment} alt="Apartment search case study" className="w-full rounded-lg" />
            <h2 className="font-vina-sans text-xl sm:text-2xl md:text-3xl lg:text-[34px] max-w-full lg:max-w-[85%] leading-tight sm:leading-snug lg:leading-[36px] text-[#FFF0C1]">
              Designing for easier apartment search and rentals - A UX Research
              Case Study
            </h2>
            <span className="flex items-center gap-1 sm:gap-2 font-geist text-sm sm:text-base font-medium tracking-[-2%] leading-none w-fit py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-[8px] bg-white cursor-pointer hover:translate-y-1 duration-300 active:scale-95">
              Read on medium
              <img src={arrow} alt="arrow" className="w-2 sm:w-[8px]" />
            </span>
          </div>
        </a>
        
         <a href="https://medium.com/@aderael/designing-for-better-nft-adoption-by-improving-customer-education-a-ux-research-case-study-602bb2f350c4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-auto lg:min-h-142.5 flex-1 px-6 py-6 sm:px-8.5 sm:py-8 flex flex-col justify-end rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#2E2E2E] cursor-pointer hover:translate-y-1 duration-300 active:translate-y-2"
        >
          <div className="flex flex-col gap-4 sm:gap-5.5 w-full">
            <img src={nft} alt="NFT adoption case study" className="w-full rounded-lg" />
            <h2 className="font-vina-sans text-xl sm:text-2xl md:text-3xl lg:text-[34px] max-w-full lg:max-w-[87%] leading-tight sm:leading-snug lg:leading-[36px] text-[#FFF0C1]">
              Designing for better NFT adoption by improving customer education
              — A UX Research Case Study.
            </h2>
            <span className="flex items-center gap-1 sm:gap-2 font-geist text-sm sm:text-base font-medium tracking-[-2%] leading-none w-fit py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-[8px] bg-white cursor-pointer hover:translate-y-1 duration-300 active:scale-95">
              Read on medium
              <img src={arrow} alt="arrow" className="w-2 sm:w-[8px]" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}