import Image from "next/image";
import PerkCard from "./PerkCard";
import { perks } from "./WhyUs.constent";
import globe from "../../../../public/assets/globe.png";

const WhyUs = () => {
  return (
    <div className="relative">
      <h2 className="text-prime text-center text-5xl font-bold ">
        WHY CHOOSE US
      </h2>
      <div className="relative">
        <Image src={globe} alt="" className="absolute mx-[5%]" />
        <div className=" w-[70%] mx-auto grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mt-[10dvh] gap-6">
          {perks.map((perk, index) => (
            <PerkCard key={index} perk={perk} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
