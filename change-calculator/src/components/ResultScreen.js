// src/components/ResultScreen.js
import React from "react";
import CurrencyDisplay from "./CurrencyDisplay";

function ResultScreen({
  amount,
  currencyCounts,
  onBack,
  handleIncrease,
  handleDecrease,
}) {

  return (
    <div className="result-screen">
      <h1>計算結果</h1>
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
