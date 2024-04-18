import { getPairData } from "../binanceService";
import PairData from "../pairData";

export default async function Jpy() {
  const data = await getPairData("BTCJPY");

  return (
    <main className="flex items-center flex-col md:text-3xl">
      <div>Satoshi Money</div>
      <div>BTC / JPY</div>
      <PairData data={data} currency="JPY" />
    </main>
  );
}
