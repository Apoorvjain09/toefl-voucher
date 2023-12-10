import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../../../../public/assets/whatsapp.svg";

const Action = () => {
  const phoneNumber = "917011460487";
  const prefilledMessage = encodeURIComponent(
    "Please get me the TOEFL voucher code"
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${prefilledMessage}`;

  return (
    <div className="flex items-center gap-10 ">
      <Link href={whatsappLink} target="_blank">
        <Button
          variant="primary"
          size="lg"
          className="font-bold text-lg rounded-full "
        >
          Get the Code -&gt;
        </Button>
      </Link>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Image src={whatsapp} alt="" height={55} />
      </a>
    </div>
  );
};

export default Action;
