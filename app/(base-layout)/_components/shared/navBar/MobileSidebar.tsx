"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import BrandLogo from "./BrandLogo";
import Menu from "./Menu";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignLeft />
      </SheetTrigger>
      <SheetContent side="left" className="lg:hidden ">
        <SheetHeader className=" min-h-screen relative text-center">
          <SheetTitle className="text-center">
            <BrandLogo />
          </SheetTitle>
          <SheetDescription className=" py-[20dvh] h-auto">
            <Menu mobile={true} />
          </SheetDescription>
          <p className="text-[14px] font-semibold absolute bottom-10 text-center py-4 w-full">
            Copyright 2023 • All Rights Reserved mlw.fig
          </p>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
