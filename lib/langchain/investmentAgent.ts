import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0.3,
});

export async function analyzeInvestment(
  company: string,
  stockData: any
) {
  const response = await model.invoke(`
You are a professional investment analyst.

Analyze the company "${company}" using this live financial data:

Market Capitalization: ${stockData.MarketCapitalization}
PE Ratio: ${stockData.PERatio}
EPS: ${stockData.EPS}
52 Week High: ${stockData["52WeekHigh"]}
52 Week Low: ${stockData["52WeekLow"]}
Revenue TTM: ${stockData.RevenueTTM}

Return ONLY valid JSON in this format:

{
  "recommendation": "INVEST",
  "confidence": 85,
  "summary": "",
  "strengths": [],
  "risks": []
}

Do not use markdown.
Do not use code blocks.
`);

  const content = response.content as string;

  const cleanedContent = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedContent);
}