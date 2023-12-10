import { infos } from "./Footer.constent";
import Link from "next/link";

import ellipse1 from "../../../../../public/assets/ellipse 1.svg";
import ellipse2 from "../../../../../public/assets/ellipse 2.svg";
import titik from "../../../../../public/assets/Titik-titik.svg";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import ConnectUs from "./ConnectUs";

const Footer = () => {
  return (
    <div className="relative bg-prime text-white  ">
      <div className="lg:w-[75%] mx-auto px-4">
        <div className="mb-8">
          <Image src={titik} alt="" />
        </div>
        <div className="flex flex-col xl:flex-row  gap-12 border-b-2 pb-10">
          <div className="md:w-[70%]  mx-auto md:text-center xl:text-start">
            <h4 className="font-bold text-2xl">Selenium Educations</h4>
            <p className="mt-5 font-semibold lg:w-[90%]">
              the best online learning place in the universe, with cool case
              studies, great mentors and graduates who are already working in
              the best companies in the world
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5   w-full ">
            {infos.map((info, index) => (
              <div key={index}>
                <h5 className="font-semibold text-lg">{info.title}</h5>
                <div className="flex flex-col gap-2 lg:gap-3 mt-5 font-semibold text-sm ">
                  {info.links.map((L, i) => (
                    <span key={i}>
                      <Link
                        href={L.link}
                        className="hover:text-[#E0F2FF] duration-200"
                      >
                        {L.tag}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <ConnectUs />
          </div>
        </div>
        <p className="text-center py-8 font-semibold">
          Copyright 2023 • All Rights Reserved mlw.fig
        </p>
      </div>

      {/* background svgs*/}

      <div className="absolute left-0 bottom-0 ">
        <Image src={ellipse2} alt="" />
      </div>
      <div className="absolute right-0 top-0 ">
        <Image src={ellipse1} alt="" />
      </div>
    </div>
  );
};

export default Footer;
