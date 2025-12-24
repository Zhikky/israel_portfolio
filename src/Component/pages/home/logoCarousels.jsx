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
    <section className="flex flex-col items-center gap-9.5 mt-18 px-37 pt-10 pb-43 max-w-[1440px] h-1 w-full z-0">
      <p className="text-[#ABABAB] font-geist text-base leading-6.75">
        Companies I've worked for
      </p>
      <div className="w-full">
        <Flicking plugins={plugins} circular={true}>
          <img src={brandLogo1} alt="test" className="panel w-[9%] mx-10" />
          <img src={brandLogo2} alt="test" className="panel w-[9%] mx-10" />
          <img src={brandLogo3} alt="test" className="panel w-[9%] mx-10" />
          <img src={brandLogo4} alt="test" className="panel w-[9%] mx-10" />
          <img src={brandLogo5} alt="test" className="panel w-[9%] mx-10" />
          <img src={brandLogo6} alt="test" className="panel w-[9%] mx-10" />
          <img src={brandLogo7} alt="test" className="panel w-[9%] mx-10" />
        </Flicking>
      </div>
    </section>
  );
}
