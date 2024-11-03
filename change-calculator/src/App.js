// src/App.js
import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [currencyCounts, setCurrencyCounts] = useState({});
  const [showBills, setShowBills] = useState(false);

  const calculateCurrency = (value, includeBills) => {
    const denominations = includeBills
      ? [10000, 5000, 1000, 500, 100, 50, 10, 5, 1]
      : [500, 100, 50, 10, 5, 1];
    let remaining = value;
    const counts = {};

    denominations.forEach((denom) => {
      counts[denom] = Math.floor(remaining / denom);
      remaining %= denom;
    });

    setCurrencyCounts(counts);
  };

  const handleConvert = () => {
    const numericAmount = parseInt(amount, 10);
    if (isNaN(numericAmount) || numericAmount < 0) {
      alert("有効な金額を入力してください。");
      return;
    }
    calculateCurrency(numericAmount, showBills);
  };

  return (
    <div className="App">
      {!currencyCounts || Object.keys(currencyCounts).length === 0 ? (
        <MainScreen
          amount={amount}
          setAmount={setAmount}
          onConvert={handleConvert}
          showBills={showBills}
          setShowBills={setShowBills}
        />
      ) : (
        <ResultScreen
          amount={amount}
          currencyCounts={currencyCounts}
          onBack={() => setCurrencyCounts({})}
          showBills={showBills}
          setShowBills={setShowBills}
          calculateCurrency={calculateCurrency}
        />
      )}
    </div>
  );
}

export default App;
