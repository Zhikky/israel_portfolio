
import "@egjs/react-flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import brandLogo1 from "../../../assets/brands/designLab.png";
import brandLogo2 from "../../../assets/brands/jetiffy.png";
import brandLogo3 from "../../../assets/brands/kinnra.png";
import brandLogo4 from "../../../assets/brands/secfix.png";
import brandLogo5 from "../../../assets/brands/teckplus.png";
import brandLogo6 from "../../../assets/brands/testgorilla.png";
import brandLogo7 from "../../../assets/brands/vencru.png";

export default function LogoCarousels() {
  const plugins = [
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),
  ];

  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-9.5 mt-12 sm:mt-14 lg:mt-18 px-4 sm:px-8 md:px-16 lg:px-37 pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-32 lg:pb-43 max-w-[1440px] h-1 w-full z-0">
      <p className="text-[#ABABAB] font-geist text-sm sm:text-base leading-6 sm:leading-6.75 text-center">
        Companies I've worked for
      </p>
      <div className="w-full">
        <Flicking plugins={plugins} circular={true}>
          <img src={brandLogo1} alt="DesignLab" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
          <img src={brandLogo2} alt="Jetiffy" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
          <img src={brandLogo3} alt="Kinnra" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
          <img src={brandLogo4} alt="Secfix" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
          <img src={brandLogo5} alt="TeckPlus" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
          <img src={brandLogo6} alt="TestGorilla" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
          <img src={brandLogo7} alt="Vencru" className="panel w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] mx-4 sm:mx-6 md:mx-8 lg:mx-10" />
        </Flicking>
      </div>
    </section>
  );
}