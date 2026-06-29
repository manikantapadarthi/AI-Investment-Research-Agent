# AI Investment Research Agent

## Overview

AI Investment Research Agent is an AI-powered web application that analyzes publicly traded companies and provides investment recommendations using live financial data and Large Language Models.

The application combines real-time stock market metrics with AI-generated insights to help users make informed investment decisions.

Users can enter a company name such as **Tesla**, **Apple**, or **Microsoft**, and the system automatically retrieves the stock symbol, fetches live financial data, and generates an investment analysis.

---

## Features

* AI-powered investment analysis
* Automatic company name to stock symbol conversion
* Live financial data integration
* Investment recommendation generation
* Confidence score prediction
* Company strengths and risks identification
* Financial metrics display
* Responsive and modern user interface

---

## Live Financial Metrics

The application retrieves real-time financial information including:

* Market Capitalization
* P/E Ratio
* Earnings Per Share (EPS)
* 52 Week High
* 52 Week Low
* Revenue (TTM)

---

## Technology Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* TypeScript

### AI Layer

* Groq API
* Llama 3.3 70B Versatile Model

### Financial Data

* Alpha Vantage API

---

## Project Architecture

```text
User enters company name
        ↓
Company symbol lookup
        ↓
Fetch live stock data
        ↓
Send financial data to AI model
        ↓
Generate investment recommendation
        ↓
Display analysis and financial metrics
```

---

## Project Structure

```text
app/
│
├── api/
│   └── analyze/
│       └── route.ts
│
├── page.tsx
│
lib/
│
├── langchain/
│   └── investmentAgent.ts
│
└── stocks/
    ├── getStockData.ts
    └── getSymbol.ts
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd ai-investment-agent
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
GROQ_API_KEY=your_groq_api_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Usage

Enter a company name such as:

* Tesla
* Apple
* Microsoft
* NVIDIA
* Amazon
* Infosys
* TCS

The application will:

1. Convert the company name into a stock symbol.
2. Retrieve live financial information.
3. Generate AI-powered investment insights.
4. Display the recommendation and metrics.

---

## Example Output

```text
Company: Tesla
Symbol: TSLA

Market Cap: 1.02T
P/E Ratio: 65.2
EPS: 4.83
52 Week High: 488.54
52 Week Low: 138.80

Recommendation: HOLD
Confidence: 82%

Summary:
Tesla remains a dominant player in the electric vehicle industry with strong long-term growth potential.

Strengths:
- Strong global brand
- Market leadership in EVs
- Expanding energy business

Risks:
- Increasing competition
- Regulatory challenges
- Premium valuation
```

---

## API Rate Limits

This project uses the free tier of Alpha Vantage which currently allows:

* 25 API requests per day
* 1 request per second

If the limit is exceeded, the application gracefully handles the error and informs the user.

For production environments, higher-rate providers such as Finnhub or premium Alpha Vantage plans are recommended.

---

## Future Enhancements

* Real-time stock prices
* Historical price charts
* Financial news analysis
* News sentiment analysis
* Competitor comparison
* Earnings report analysis
* Portfolio tracking
* Watchlist management

---

## Learning Outcomes

This project demonstrates:

* Full-stack development with Next.js
* AI integration using LLMs
* Financial API integration
* Prompt engineering
* REST API development
* Error handling and resilience
* Modern TypeScript development practices

---

## Author

Developed as part of an AI Product Internship assignment to showcase the integration of Artificial Intelligence and live financial data for investment research applications.
