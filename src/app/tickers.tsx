"use client";

import { useRouter } from "next/navigation";
import { TickerData, TickerList } from "./types";
import { useEffect } from "react";

const roundToDecimals = (data: TickerData) =>
  (Math.round(+data.lastPrice * 100) / 100).toFixed(2);

function Tickers({ data }: { data: TickerList }) {
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
    <div className="w-100 pt-4">
      <div className="flex justify-between border-white border-t py-4 px-4">
        <span>BTC / USD</span> <span>{roundToDecimals(data[0])} $</span>
      </div>
      <div className="flex justify-between border-white border-t py-4 px-4">
        <span>BTC / EUR</span> <span>{roundToDecimals(data[1])} €</span>
      </div>
      <div className="flex justify-between border-white border-t border-b py-4 px-4">
        <span>BTC / JPY</span> <span>{roundToDecimals(data[2])} ¥</span>
      </div>
    </div>
  );
}

export default Tickers;
