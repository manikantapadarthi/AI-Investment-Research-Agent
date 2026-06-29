import { NextResponse } from "next/server";
import { analyzeInvestment } from "@/lib/langchain/investmentAgent";
import { getStockData } from "@/lib/stocks/getStockData";
import { getSymbol } from "@/lib/stocks/getSymbol";

export async function POST(req: Request) {
  try {
    const { company } = await req.json();

    // Convert company name to stock symbol
    const symbol = await getSymbol(company);
    

    if (!symbol) {
      return NextResponse.json(
        {
          error: "Company not found",
        },
        {
          status: 404,
        }
      );
    }

    // Get live stock data
    const stockData = await getStockData(symbol);
    console.log("Symbol:", symbol);
    console.log("Stock Data:", stockData);

    // AI analysis
    const analysis = await analyzeInvestment(
      company,
      stockData
    );

    return NextResponse.json({
      company,
      symbol,
      stockData,
      ...analysis,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}