import { getPairData } from "../binanceService";
import PairData from "../pairData";

export default async function Eur() {
  const data = await getPairData("BTCEUR");

  return (
    <main className="flex items-center flex-col">
      <div>Satoshi Money</div>
      <div>BTC / EUR</div>
      <PairData data={data} />
    </main>
  );
}
