"use client";

import { useRouter } from "next/navigation";
import { TickerData } from "./types";
import { useEffect, useState } from "react";
import { roundToDecimals } from "./utils";

function PairData({ data, currency }: { data: TickerData; currency: string }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [equivalent, setEquivalent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // A router refresh does not refresh the browser page,
      // the re-fetching of the data is done on the server
      router.refresh();
    }, 10000);
    return () => clearInterval(id);
  }, [router]);

  useEffect(() => {
    setEquivalent(+inputValue / +data.lastPrice);
  }, [data.lastPrice, inputValue]);

  return (
    <div className="w-full pt-4">
      <div className="flex justify-between border-white border-t border-x py-4 px-4">
        <span>Price</span> <span>{roundToDecimals(+data.lastPrice)} €</span>
      </div>
      <div className="flex justify-between border-white border-t border-x py-4 px-4">
        <span>24H Low</span> <span>{roundToDecimals(+data.lowPrice)} €</span>
      </div>
      <div className="flex justify-between border-white border-t border-x py-4 px-4">
        <span>24H High</span> <span>{roundToDecimals(+data.highPrice)} €</span>
      </div>
      <div className="flex justify-between border-white border-t border-x border-b py-4 px-4">
        <span>Volume</span> <span>{roundToDecimals(+data.volume)}</span>
      </div>
      <div className="flex items-center justify-center pt-4">
        Buy:
        <input
          className="text-black mx-2 w-24"
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        {currency}
      </div>
      <div className="flex items-center justify-center pt-4">
        Get {equivalent} BTC
      </div>
    </div>
  );
}

export default PairData;
