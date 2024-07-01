"use client";
import { useMemo } from "react";
import Image from "next/image";
import { useReadContract } from "wagmi";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

import { abi } from "@/abi/LouNFT";

import type { NFTInter } from "@/@types";

type Props = {
  tokenId: string | number;
  info: NFTInter;
};

const BASE_URL = "https://black-many-mandrill-971.mypinata.cloud/ipfs/";

const NFTItem: React.FC<Props> = ({ tokenId, info }) => {
  console.log("info: ", info);
  const tokenURL = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_ERC721_ADDRESS as any,
    functionName: "tokenURI",
    args: [tokenId],
  });

  const NFTURL = useMemo(() => {
    if (!tokenURL.data) return "";

    const [, tokenUrl] = String(tokenURL.data)?.split(".cloud");

    return tokenUrl ?? "";
  }, [tokenURL]);

  return (
    <Card className="p-2">
      <div className="relative w-full rounded min-h-[200px] flex flex-col justify-center items-center">
        {NFTURL && (
          <Image
            className="rounded-md z-0 relative"
            src={`${BASE_URL}${NFTURL}`}
            alt="nft"
            width={320}
            height={280}
          />
        )}

        <div className="bg-[#f5f5f5] dark:bg-[#282828] w-full p-4 rounded-md my-2">
          <div className="w-full flex justify-between">
            <div>
              <div className="text-sm">Token Id:</div>
              <div className="font-medium">{info.tokenId}</div>
            </div>

            <div>
              <div className="text-sm">Price:</div>
              <div className="text-primary font-medium">{info.price} LOU</div>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="text-sm">NFT Contract:</div>

            <div className="font-medium w-full overflow-hidden text-ellipsis">
              {info.nftContract}
            </div>
          </div>
        </div>

        {!info.isActive && (
          <div className="absolute right-0 z-10">
            <Image
              src={`/images/sold.png`}
              alt="sold out"
              width={180}
              height={800}
            />
          </div>
        )}

        <div className="w-full flex justify-between items-center">
          <HoverCard>
            <HoverCardTrigger>
              <Avatar className="mr-8 cursor-pointer w-[30px] h-[30px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent>{info.seller}</HoverCardContent>
          </HoverCard>

          <Button className="w-[140px]" disabled={!info.isActive}>
            Buy
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NFTItem;
