"use client";
import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

const Balance: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const { address, isConnecting, isDisconnected } = useAccount();
  const result = useBalance({
    address,
    token: "0x034ba171732A6e9AD5B9Be3EBa422896aD1446fB",
  });

  console.log("result: ", result);

  return isConnecting || isDisconnected ? null : (
    <div>
      {result.data?.formatted} {result.data?.symbol}
    </div>
  );
};

export default Balance;
