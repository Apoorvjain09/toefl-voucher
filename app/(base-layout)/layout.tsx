import { ReactNode } from "react";
import NavBar from "./_components/shared/navBar/NavBar";
import Footer from "./_components/shared/footer/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
