import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const models = [
  // Full list of models across all sectors with enhanced details
  { name: "FinBERT", sector: "Finance & Risk", category: "Text Analysis", link: "/model/finbert", description: "Analyzes financial sentiment from news and reports.", price: "$750", apiCost: "$0.05 per request", benchmarks: "Accuracy: 91%", dataset: "Trained on financial news and reports", useCases: ["Investment Research", "Market Sentiment Analysis"], integrationSnippet: "fetch('/api/finbert')" },
  { name: "Financial-Time-Series-Predictor", sector: "Finance & Risk", category: "Predictive AI", link: "/model/financial-time-series", description: "Forecasts stock and financial trends based on historical data.", price: "$1,200", apiCost: "$0.08 per request", benchmarks: "R-Squared: 0.87", dataset: "Historical stock market data", useCases: ["Portfolio Management", "Risk Forecasting"], integrationSnippet: "fetch('/api/financial-time-series')" },
  // More models listed here...
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [comparisonModels, setComparisonModels] = useState([]);
  const [usage, setUsage] = useState(1000);
  const pricePerCall = 0.05;
  const estimatedCost = (usage * pricePerCall).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center">Modello - AI Without Coding</h1>
      <p className="text-lg mt-2 text-center">Find, test, and integrate AI models instantly—no programming required.</p>
      <button className="bg-blue-600 text-white p-3 rounded mt-4 block mx-auto">Explore AI Models</button>

      <section className="mt-8 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Modello?</h2>
        <p className="mt-2">Unlike Hugging Face or AWS, we offer **ready-to-use AI solutions** that require no setup.</p>
        <ul className="mt-4 list-disc list-inside">
          <li>✅ Instant AI deployment - No coding required</li>
          <li>✅ Plug-and-play solutions for various industries</li>
          <li>✅ Live model testing before purchase</li>
          <li>✅ AI-powered recommendations for your business needs</li>
        </ul>
      </section>
      
      <div className="flex gap-4 my-4">
        <input type="text" placeholder="Search AI models..." className="border p-2 w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <select className="border p-2" value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}>
          <option value="All">All Sectors</option>
          <option value="Finance & Risk">Finance & Risk</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Retail & E-commerce">Retail & E-commerce</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Energy">Energy</option>
          <option value="Logistics">Logistics</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Education">Education</option>
        </select>
        <select className="border p-2" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Model Types</option>
          <option value="Predictive AI">Predictive AI</option>
          <option value="Text Analysis">Text Analysis</option>
          <option value="Image Processing">Image Processing</option>
          <option value="NLP">Natural Language Processing</option>
        </select>
      </div>

      <h3 className="text-2xl font-semibold mt-6">How It Works</h3>
      <ul className="mt-2 list-decimal list-inside">
        <li>1️⃣ Browse and search for AI models tailored to your needs.</li>
        <li>2️⃣ Test models with live data before purchasing.</li>
        <li>3️⃣ Purchase & instantly generate an API key for integration.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Live Model Comparison (Now Up to 4 Models)</h3>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* Comparison table for up to 4 models will be dynamically generated */}
      </div>

      <h3 className="text-2xl font-semibold mt-6">AI Assistant - Smart Chat for Model Recommendations</h3>
      <input type="text" placeholder="Describe what you need AI for..." className="border p-2 w-full my-2" />
      <button className="bg-green-600 text-white p-3 rounded">Ask AI Assistant</button>
      
      <h3 className="text-2xl font-semibold mt-6">Pricing & Subscription Plans</h3>
      <ul>
        <li>✔ Free Trial for select models</li>
        <li>✔ Pay-per-use API calls</li>
        <li>✔ Subscription bundles for access to multiple models</li>
        <li>✔ Bulk Pricing Discounts</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mt-6">Customer Reviews & Success Stories</h3>
      <div className="border p-4 mt-4">
        <p>⭐⭐⭐⭐⭐ “Modello made it super easy to integrate AI into our workflow!” - TechCorp</p>
      </div>
    </div>
  );
}
