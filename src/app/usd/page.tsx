import { getPairData } from "../binanceService";
import PairData from "../pairData";

export default async function Usd() {
  const data = await getPairData("BTCUSDT");

  return (
    <main className="flex items-center flex-col md:text-3xl">
      <div>Satoshi Money</div>
      <div>BTC / USD</div>
      <PairData data={data} currency="USD" />
    </main>
  );
}
