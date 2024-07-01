import Faucet from "@/components/Faucet";
import Header from "@/components/Header";
import Listing from "@/components/Listing";

import { inter } from "@/context/font";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-[1440px] mx-auto h-screen overflow-hidden">
        <Header />

        <div className="flex-1 flex flex-col py-4">
          <div className="w-full flex flex-end items-end gap-2">
            <div className={`mr-auto text-2xl font-medium ${inter.className}`}>
              Popular products
            </div>
            <Listing />
            <Faucet />
          </div>
        </div>
      </div>
    </div>
  );
}
