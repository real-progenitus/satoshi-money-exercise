import Tickers from "./tickers";

// Fiat currencies selected were US Dollar, Euro and Japanese Yen
// Binance API was used instead of CoinGecko because Binance doesn't require API Keys
// for price data which removes the need to share my API key through a secure channel
// or requiring the next user of the app to create his own.
async function getPrices() {
  const res = await fetch(
    'https://data-api.binance.vision/api/v3/ticker?symbols=["BTCUSDT","BTCEUR","BTCJPY"]',
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getPrices();

  return (
    <main>
      <div>Satoshi Money</div>
      <div>Exercise App</div>
      <Tickers data={data} />
    </main>
  );
}
