import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const ConnectUs = () => {
  return (
    <div>
      <h5 className="font-semibold text-lg">Connect Us</h5>
      <div className="mt-5 flex flex-col gap-2 lg:gap-3 font-semibold text-sm">
        <p>
          <Link
            href={"mailto:apoorv@mja.in"}
            className="hover:text-[#E0F2FF] duration-200"
          >
            <Mail size={18} strokeWidth={1.25} className=" inline " />
            <span> &nbsp;apoorv@mja.in</span>
          </Link>
        </p>

        <p className="flex items-start  gap-1">
          <Phone size={18} strokeWidth={1.25} />
          <span>+91 7011460487</span>
        </p>
        <p className="flex items-start gap-1">
          <MapPin size={18} strokeWidth={1.25} />
          <span>Delhi, NCR</span>
        </p>
      </div>
    </div>
  );
};

export default ConnectUs;
