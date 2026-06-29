"use client";

import { useState } from "react";

export default function Home() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

const analyzeCompany = async () => {
  if (!company) return;

  setLoading(true);

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        company
      })
    });

    const data = await response.json();

    setResult(data);
  } catch (error) {
    console.error(error);
  }

  setLoading(false);
};

  return (
  <main className="min-h-screen flex flex-col items-center justify-center p-10">
    <h1 className="text-5xl font-bold mb-6">
      AI Investment Research Agent
    </h1>

    <p className="text-xl text-gray-600 mb-8">
      Enter a company name and get an AI-powered investment recommendation.
    </p>

    {/* Input and Button */}
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 w-80"
      />

      <button
        onClick={analyzeCompany}
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg"
    >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>

    {/* Result Card */}
    {result && (
      <div className="mt-10 w-full max-w-3xl border rounded-xl p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        {result.company}
      </h2>

      <p className="text-gray-600 mb-4">
        Symbol: {result.symbol}
      </p>

    {result.stockData && (
      <div className="mb-6 border rounded-lg p-4">
        <p>
          <strong>Market Cap:</strong>{" "}
          {result.stockData.MarketCapitalization}
        </p>

        <p>
          <strong>P/E Ratio:</strong>{" "}
          {result.stockData.PERatio}
        </p>

        <p>
          <strong>EPS:</strong>{" "}
          {result.stockData.EPS}
        </p>

        <p>
          <strong>52 Week High:</strong>{" "}
          {result.stockData["52WeekHigh"]}
        </p>

        <p>
          <strong>52 Week Low:</strong>{" "}
          {result.stockData["52WeekLow"]}
        </p>
      </div>
    )}

        <div className="mb-4">
          <span className="font-semibold">Recommendation:</span>{" "}
          {result.recommendation}
        </div>

        <div className="mb-4">
          <span className="font-semibold">Confidence:</span>{" "}
          {result.confidence}%
        </div>

        <div className="mb-4">
          <span className="font-semibold">Summary:</span>
          <p>{result.summary}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Strengths</h3>
          <ul className="list-disc ml-5">
            {result.strengths?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
         ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Risks</h3>
          <ul className="list-disc ml-5">
            {result.risks?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
           ))}
          </ul>
        </div>
      </div>
    )}
  </main>
);
}