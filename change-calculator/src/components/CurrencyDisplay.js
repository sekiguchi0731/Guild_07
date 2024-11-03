// src/components/CurrencyDisplay.js
import React from "react";
import "./CurrencyDisplay.css";

function CurrencyDisplay({ currencyCounts, handleIncrease, handleDecrease }) {
  const sortedDenominations = Object.keys(currencyCounts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="currency-display">
      {sortedDenominations.map((denom) => (
        <div key={denom} className="currency-item">
          <span className="denomination">{denom}円</span>
          <span className="count">{currencyCounts[denom]}枚</span>
          <div className="buttons">
            <button onClick={() => handleIncrease(denom)}>+</button>
            <button
              onClick={() => handleDecrease(denom)}
              disabled={currencyCounts[denom] <= 0}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrencyDisplay;
