import { FC } from "react";
import Link from "next/link";
import ConnectButton from "@/components/ConnectButton";

const Header: FC = () => {
  return (
    <header className="py-4 lg:py-7 px-4 lg:px-[112px] fixed w-full z-50 left-0 top-0 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="">
          <div className="relative text-2xl text-white font-bold">
            SPL-Token Launchpad
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
