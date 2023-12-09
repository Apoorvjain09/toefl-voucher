"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Baloo_Bhai_2, Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const textFont = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const menuLinks = [
  {
    to: "/",
    tag: "Home",
  },
  {
    to: "#",
    tag: "Discover",
  },
  {
    to: "#",
    tag: "Spacial Deals",
  },
];

const NavBar = () => {
  const path = usePathname();

  return (
    <div className="fixed top-0 w-full py-6 px-4 bg-white z-[100]   flex items-center">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <h3
          className={cn(
            headingFont.className,
            "text-[#1700FF] text-2xl  font-[700] "
          )}
        >
          Selenium Education
        </h3>

        <div
          className={cn(
            "flex items-center gap-[60px]",
            textFont.className,
            "font-semibold text-lg"
          )}
        >
          {menuLinks.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              className={cn(
                {
                  "text-[#8C8B92] hover:text-[#3a3a3f]": path !== link.to,
                },
                "duration-200"
              )}
            >
              {link.tag}
            </Link>
          ))}
        </div>

        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full ">
          <Button
            size="lg"
            variant="contact"
            className={cn(
              "rounded-full px-5 shadow-lg hover:shadow-xl transition-shadow duration-200",
              textFont.className
            )}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
