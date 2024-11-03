// src/components/CurrencyDisplay.js
import React from "react";

function CurrencyDisplay({ currencyCounts }) {
  const sortedDenominations = Object.keys(currencyCounts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="currency-display">
      {sortedDenominations.map((denom) => (
        <div key={denom} className="currency-item">
          <span>{denom}円</span>
          <span>{currencyCounts[denom]}枚</span>
        </div>
      ))}
    </div>
  );
}

export default CurrencyDisplay;
