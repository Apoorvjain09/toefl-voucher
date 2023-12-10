import { menuLinks } from "./NavBar.constent";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const textFont = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type Props = {
  mobile?: boolean;
};

const Menu = ({ mobile = false }: Props) => {
  const path = usePathname();

  return (
    <div
      className={cn(
        {
          "flex-row items-center gap-[60px]": !mobile,
          " flex-col  gap-[15px] text-center": mobile,
        },
        textFont.className,
        "font-semibold text-lg flex "
      )}
    >
      {menuLinks.map((link, index) => (
        <Link
          href={link.to}
          key={index}
          className={cn(
            {
              "text-[#8C8B92] hover:text-[#3a3a3f]": path !== link.to,
              "text-[#000]": path === link.to,
            },
            "duration-200"
          )}
        >
          {link.tag}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
