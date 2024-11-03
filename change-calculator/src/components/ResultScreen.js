// src/components/ResultScreen.js
import React from "react";
import CurrencyDisplay from "./CurrencyDisplay";

function ResultScreen({
  amount,
  currencyCounts,
  onBack,
  showBills,
  handleToggleBills,
  handleIncrease,
  handleDecrease,
}) {
  const handleToggle = () => {
    handleToggleBills();
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
      <CurrencyDisplay
        currencyCounts={currencyCounts}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <button onClick={onBack}>戻る</button>
    </div>
  );
}

export default ResultScreen;
