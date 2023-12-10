import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Baloo_2 } from "next/font/google";
import Link from "next/link";

const textFont = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ContactBtn = () => {
  return (
    <div
      className={cn(
        "space-x-4 md:block md:w-auto flex items-center justify-between"
      )}
    >
      <Link href={"https://api.whatsapp.com/send?phone=917011460487&text=Hi,%20I%20am%20looking%20for%20TOEFL%20test%20voucher."} target="_blank">
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
      </Link>
    </div>
  );
};

export default ContactBtn;
