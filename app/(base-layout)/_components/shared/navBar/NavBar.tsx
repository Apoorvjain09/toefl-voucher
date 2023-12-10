"use client";

import MobileSidebar from "./MobileSidebar";
import ContactBtn from "./ContactBtn";
import BrandLogo from "./BrandLogo";

import { cn } from "@/lib/utils";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 w-full py-2 px-4 bg-white z-[100]   md:flex items-center hidden ">
        <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
          <BrandLogo />
          <Menu />
          <ContactBtn />
        </div>
      </div>

      {/* mobile */}
      <div className={cn("flex justify-between p-4 md:hidden")}>
        <MobileSidebar />
        <ContactBtn />
      </div>
    </>
  );
};

export default NavBar;
