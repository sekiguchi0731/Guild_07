// src/components/ResultScreen.js
import React from "react";
import CurrencyDisplay from "./CurrencyDisplay";

function ResultScreen({
  amount,
  currencyCounts,
  onBack,
  showBills,
  setShowBills,
  calculateCurrency,
}) {
  const handleToggle = () => {
    const newShowBills = !showBills;
    setShowBills(newShowBills);
    calculateCurrency(parseInt(amount, 10), newShowBills);
  };

  return (
    <div className="result-screen">
      <h1>計算結果</h1>
      <div className="toggle">
        <label>
          <input type="checkbox" checked={showBills} onChange={handleToggle} />
          紙幣を含める
        </label>
      </div>
      <CurrencyDisplay currencyCounts={currencyCounts} />
      <button onClick={onBack}>戻る</button>
    </div>
  );
}

export default ResultScreen;
