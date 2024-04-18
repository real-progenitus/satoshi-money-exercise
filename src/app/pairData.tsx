"use client";

import { useRouter } from "next/navigation";
import { TickerData } from "./types";
import { useEffect } from "react";
import { roundToDecimals } from "./utils";

function PairData({ data }: { data: TickerData }) {
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(() => {
      // A router refresh does not refresh the browser page,
      // the re-fetching of the data is done on the server
      router.refresh();
    }, 10000);
    return () => clearInterval(id);
  }, [router]);

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
    </div>
  );
}

export default PairData;
