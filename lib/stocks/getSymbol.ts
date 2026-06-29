export async function getSymbol(company: string) {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  const response = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${company}&apikey=${apiKey}`
  );

  const data = await response.json();

  if (!data.bestMatches || data.bestMatches.length === 0) {
    return null;
  }

  // Prefer US listings
  const usMatch = data.bestMatches.find(
    (item: any) => item["4. region"] === "United States"
  );

  if (usMatch) {
    return usMatch["1. symbol"];
  }

  // Fallback to first match
  return data.bestMatches[0]["1. symbol"];
}