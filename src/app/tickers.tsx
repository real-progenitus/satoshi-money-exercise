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
    <div>
      Bitcoin Price: {roundToDecimals(data[0])} USD / &nbsp;
      {roundToDecimals(data[1])} EUR / &nbsp;
      {roundToDecimals(data[2])} JPY
    </div>
  );
}

export default Tickers;
