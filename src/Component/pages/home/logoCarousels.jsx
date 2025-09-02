import "@egjs/react-flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import brandLogo1 from "../../../assets/brands/Frame 41.png";
import brandLogo2 from "../../../assets/brands/Frame 42.png";
import brandLogo3 from "../../../assets/brands/Frame 43.png";
import brandLogo4 from "../../../assets/brands/Frame 44.png";
import brandLogo5 from "../../../assets/brands/Frame 45.png";
import brandLogo6 from "../../../assets/brands/image 4.png";

export default function LogoCarousels() {
  const plugins = [
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),
  ];

  return (
    <section className="mt-18 px-37 py-43 max-w-[1440px] h-1 w-full z-0">
      <Flicking plugins={plugins} circular={true}>
        <img src={brandLogo1} alt="test" className="panel w-[17%] mx-4" />
        <img src={brandLogo2} alt="test" className="panel w-[17%] mx-4" />
        <img src={brandLogo3} alt="test" className="panel w-[17%] mx-4" />
        <img src={brandLogo4} alt="test" className="panel w-[17%] mx-4" />
        <img src={brandLogo5} alt="test" className="panel w-[17%] mx-4" />
        <img src={brandLogo6} alt="test" className="panel w-[17%] mx-4" />
      </Flicking>
    </section>
  );
}
