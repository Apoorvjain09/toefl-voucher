import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../../../../public/assets/whatsapp.svg";

const Action = () => {
  return (
    <div className="flex items-center gap-10 ">
      <Button
        variant="primary"
        size="lg"
        className="font-bold text-lg rounded-full "
      >
        Whatsapp US -&gt;
      </Button>
      <Link
        href="https://api.whatsapp.com/send?phone=917011460487"
        target="_blank"
      >
        <Image src={whatsapp} alt="" height={55} />
      </Link>
    </div>
  );
};

export default Action;
