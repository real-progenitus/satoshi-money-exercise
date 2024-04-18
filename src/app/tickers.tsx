"use client";

import { useRouter } from "next/navigation";
import { TickerList } from "./types";
import { useEffect } from "react";
import Link from "next/link";
import { roundToDecimals } from "./utils";

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
    <div className="w-full pt-4 md:w-2/4">
      <Link
        href="/usd"
        className="flex justify-between border-white border-t border-x py-4 px-4"
      >
        <span>BTC / USD</span>{" "}
        <span>{roundToDecimals(+data[0].lastPrice)} $</span>
      </Link>
      <Link
        href="/eur"
        className="flex justify-between border-white border-t border-x py-4 px-4"
      >
        <span>BTC / EUR</span>{" "}
        <span>{roundToDecimals(+data[1].lastPrice)} €</span>
      </Link>
      <Link
        href="/jpy"
        className="flex justify-between border-white border-t border-b border-x py-4 px-4"
      >
        <span>BTC / JPY</span>{" "}
        <span>{roundToDecimals(+data[2].lastPrice)} ¥</span>
      </Link>
    </div>
  );
}

export default Tickers;
