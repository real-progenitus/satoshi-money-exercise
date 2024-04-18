// Binance API was used instead of CoinGecko because Binance doesn't require API Keys
// for price data which removes the need to share my API key through a secure channel
// or requiring the next user of the app to create his own.

const baseUrl = "https://data-api.binance.vision/api/v3/ticker";

export async function getPrices() {
  const res = await fetch(`${baseUrl}?symbols=["BTCUSDT","BTCEUR","BTCJPY"]`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPairData(pair: string) {
  const res = await fetch(`${baseUrl}?symbol=${pair}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
