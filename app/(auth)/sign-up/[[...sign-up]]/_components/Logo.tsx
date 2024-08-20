import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 ">
      <div className="bg-white rounded-full p-1 ">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="  rounded-full"
        />
      </div>
      <div className={cn("flex flex-col items-center space-y-1", font.className)}>
        <p className="text-xl font-semibold">
          Twitch-Clone
        </p>
        <p className="text-sm text-muted-foreground font-light">Let&#39;s Play</p>
      </div>
    </div>
  );
};
