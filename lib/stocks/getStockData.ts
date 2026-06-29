export async function getStockData(symbol: string) {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  const response = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  );

  const data = await response.json();

  return data;
}