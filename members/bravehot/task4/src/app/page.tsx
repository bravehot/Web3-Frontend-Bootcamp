import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header, Faucet, Listing, Market, MyNFT } from "@/components";

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

          <div className="w-full flex-1 mt-8">
            <Tabs defaultValue="market" className="w-full">
              <TabsList className="w-[400px] flex justify-between">
                <TabsTrigger className="w-1/2" value="market">
                  Market
                </TabsTrigger>
                <TabsTrigger className="w-1/2" value="myNFT">
                  My NFT
                </TabsTrigger>
              </TabsList>

              <TabsContent value="market">
                <Market />
              </TabsContent>
              <TabsContent value="myNFT">
                <MyNFT />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
