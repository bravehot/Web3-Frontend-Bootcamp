"use client";
import { useMemo } from "react";
import Image from "next/image";
import { useReadContract } from "wagmi";

import { Card } from "../ui/card";
import { abi } from "@/abi/LouNFT";
import { NFTInter } from "@/@types";

type Props = {
  tokenId: string | number;
  info: NFTInter;
};

const BASE_URL = "https://black-many-mandrill-971.mypinata.cloud/ipfs/";
const NFTItem: React.FC<Props> = ({ tokenId, info }) => {
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
      <div className="w-full rounded min-h-[200px] flex justify-center">
        {NFTURL && (
          <Image
            className="rounded-md"
            src={`${BASE_URL}${NFTURL}`}
            alt="nft"
            width={320}
            height={280}
          />
        )}
        
      </div>
    </Card>
  );
};

export default NFTItem;
