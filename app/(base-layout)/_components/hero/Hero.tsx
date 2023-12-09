import Image from "next/image";
import heroImage from "../../../../public/assets/hero.png";
import whatsapp from "../../../../public/assets/whatsapp.svg";
import arrowLine from "../../../../public/assets/arrow-line.svg";

import { Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Action from "./Action";

const textFont = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero = () => {
  return (
    <div className="h-screen ">
      <div className="relative h-[80dvh] mt-24 w-[70%] mx-auto ">
        <div
          className="absolute inset-0 bg-globe bg-no-repeat bg-center h-full w-full"
          style={{ backgroundSize: "100% 80%" }}
        ></div>

        <div className="flex  items-center ">
          <div className="w-1/2 flex flex-col  gap-28 ">
            <h2
              className={cn(
                textFont.className,
                "font-extrabold text-4xl leading-[55px] py-5"
              )}
            >
              Embark on your TOEFL <br />
              journey with <span className="text-second">significant</span>{" "}
              <br />
              <span className="text-second">savings using </span>exam voucher!
              <br />
              Don&apos;t miss out – start saving <br />
              today! 🌐💡
            </h2>

            <div className="flex items-center justify-between relative gap-10  z-10 ">
              <Action />
              <div className="absolute -right-10 bottom-3">
                <Image src={arrowLine} alt="" />
              </div>
            </div>
          </div>

          <div className="w-1/2 flex justify-end">
            <Image src={heroImage} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
