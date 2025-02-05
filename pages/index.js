import { useState } from "react";
import Navbar from '../components/Navbar';

export default function Home() {  // ✅ This is the only export default
  const models = [
    { name: "FinBERT", sector: "Finance & Risk", category: "Text Analysis", link: "/model/finbert", description: "Analyzes financial sentiment from news and reports.", price: "$750", apiCost: "$0.05 per request", benchmarks: "Accuracy: 91%", dataset: "Trained on financial news and reports", useCases: ["Investment Research", "Market Sentiment Analysis"], integrationSnippet: "fetch('/api/finbert')" },
    { name: "Financial-Time-Series-Predictor", sector: "Finance & Risk", category: "Predictive AI", link: "/model/financial-time-series", description: "Forecasts stock and financial trends based on historical data.", price: "$1,200", apiCost: "$0.08 per request", benchmarks: "R-Squared: 0.87", dataset: "Historical stock market data", useCases: ["Portfolio Management", "Risk Forecasting"], integrationSnippet: "fetch('/api/financial-time-series')" }
  ];

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-4xl p-6 mt-16">
        <h1 className="text-5xl font-bold text-center">Modello - AI Without Coding</h1>
        <p className="text-lg mt-2 text-center">Find, test, and integrate AI models instantly—no programming required.</p>
        <button className="bg-blue-600 text-white p-3 rounded mt-4 block mx-auto">Explore AI Models</button>

        <section className="mt-8 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Modello?</h2>
          <ul className="list-disc pl-5 mt-4 text-left mx-auto max-w-md">
            <li>✅ Instant AI deployment - No coding required</li>
            <li>✅ Plug-and-play solutions for various industries</li>
            <li>✅ Live model testing before purchase</li>
            <li>✅ AI-powered recommendations for your business needs</li>
          </ul>
        </section>

        <div className="flex gap-4 my-4">
          <input 
            type="text" 
            placeholder="Search AI models..." 
            className="border p-2 w-full rounded" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>

        <h3 className="text-2xl font-semibold mt-6">How It Works</h3>
        <ul className="list-decimal pl-5 mt-2 text-left">
          <li>Browse and search for AI models tailored to your needs.</li>
          <li>Test models with live data before purchasing.</li>
          <li>Purchase & instantly generate an API key for integration.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">AI Assistant - Smart Chat for Model Recommendations</h3>
        <input type="text" placeholder="Describe what you need AI for..." className="border p-2 w-full my-2 rounded" />
        <button className="bg-green-600 text-white p-3 rounded w-full">Ask AI Assistant</button>

        <h3 className="text-2xl font-semibold mt-6">Pricing & Subscription Plans</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>✔ Free Trial for select models</li>
          <li>✔ Pay-per-use API calls</li>
          <li>✔ Subscription bundles for access to multiple models</li>
          <li>✔ Bulk Pricing Discounts</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">Customer Reviews & Success Stories</h3>
        <div className="border p-4 mt-4 rounded-lg shadow-md">
          <p>⭐⭐⭐⭐⭐ “Modello made it super easy to integrate AI into our workflow!” - TechCorp</p>
        </div>
      </div>
    </div>
  ); // ✅ Closing return properly
} // ✅ Closing function properly
