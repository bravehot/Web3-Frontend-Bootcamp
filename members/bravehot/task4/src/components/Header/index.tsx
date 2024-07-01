import Image from "next/image";
import { akshar } from "@/context/font";

import Balance from "./Balance";

const Header: React.FC = () => {
  return (
    <div className="w-full py-4 flex flex-end items-end shadow">
      <div className="flex items-end mr-auto">
        <Image
          className="mr-4"
          src="/images/logo1.png"
          width={80}
          height={20}
          alt="logo"
        />
        <p className={`text-3xl ${akshar.className}`}>Kabutack NFT Market</p>
      </div>

      <Balance />
      <w3m-button balance="hide" />
    </div>
  );
};

export default Header;
