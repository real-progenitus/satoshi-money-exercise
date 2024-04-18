import { getPrices } from "./binanceService";
import Tickers from "./tickers";

// Fiat currencies selected were US Dollar, Euro and Japanese Yen

export default async function Home() {
  const data = await getPrices();

  return (
    <main className="flex items-center flex-col">
      <div>Satoshi Money</div>
      <div>Exercise App</div>
      <Tickers data={data} />
    </main>
  );
}
