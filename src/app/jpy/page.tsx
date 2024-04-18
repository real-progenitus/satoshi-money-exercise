import { getPairData } from "../binanceService";
import PairData from "../pairData";

export default async function Jpy() {
  const data = await getPairData("BTCJPY");

  return (
    <main className="flex items-center flex-col">
      <div>Satoshi Money</div>
      <div>BTC / JPY</div>
      <PairData data={data} />
    </main>
  );
}
