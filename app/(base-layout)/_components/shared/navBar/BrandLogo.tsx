import { Baloo_Bhai_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const BrandLogo = () => {
  return (
    <h3
      className={cn(
        headingFont.className,
        "text-[#1700FF] text-2xl  font-[700] "
      )}
    >
      Selenium Education
    </h3>
  );
};

export default BrandLogo;
