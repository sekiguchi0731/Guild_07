// src/App.js
import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [currencyCounts, setCurrencyCounts] = useState({});


  // 通貨の計算関数
  const calculateCurrency = (value, overrideCounts = {}) => {
    const denominations = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
    let remaining = value;
    const counts = {};

    // オーバーライドされた枚数を適用
    Object.keys(overrideCounts).forEach((denom) => {
      const denomValue = parseInt(denom, 10);
      const count = overrideCounts[denom];
      counts[denom] = count;
      remaining -= denomValue * count;
    });

    if (remaining < 0) {
      alert("選択された枚数により金額が超過しています。調整してください。");
      return;
    }

    // 残りの金額を計算
    denominations.forEach((denom) => {
      if (overrideCounts[denom]) {
        return; // オーバーライドされた場合はスキップ
      }
      counts[denom] = Math.floor(remaining / denom);
      remaining %= denom;
    });

    setCurrencyCounts(counts);
  };

  // 通貨変換ボタン押下時のハンドラー
  const handleConvert = () => {
    const numericAmount = parseInt(amount, 10);
    if (isNaN(numericAmount) || numericAmount < 0) {
      alert("有効な金額を入力してください。");
      return;
    }
    calculateCurrency(numericAmount);
  };

  // 「+」ボタン押下時のハンドラー
  const handleIncrease = (denom) => {
    const numericAmount = parseInt(amount, 10);
    if (isNaN(numericAmount) || numericAmount < 0) {
      alert("有効な金額を入力してください。");
      return;
    }

    const currentCount = currencyCounts[denom] || 0;
    const newCount = currentCount + 1;
    const newOverrideCounts = { ...currencyCounts, [denom]: newCount };
    calculateCurrency(numericAmount, newOverrideCounts);
  };

  // 「-」ボタン押下時のハンドラー
  const handleDecrease = (denom) => {
    const numericAmount = parseInt(amount, 10);
    if (isNaN(numericAmount) || numericAmount < 0) {
      alert("有効な金額を入力してください。");
      return;
    }

    const currentCount = currencyCounts[denom] || 0;
    if (currentCount <= 0) return; // 0枚以下にはしない

    const newCount = currentCount - 1;
    const newOverrideCounts = { ...currencyCounts };
    if (newCount === 0) {
      delete newOverrideCounts[denom];
    } else {
      newOverrideCounts[denom] = newCount;
    }
    calculateCurrency(numericAmount, newOverrideCounts);
  };


  return (
    <div className="App">
      {!currencyCounts || Object.keys(currencyCounts).length === 0 ? (
        <MainScreen
          amount={amount}
          setAmount={setAmount}
          onConvert={handleConvert}
        />
      ) : (
        <ResultScreen
          amount={amount}
          currencyCounts={currencyCounts}
          onBack={() => setCurrencyCounts({})}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      )}
    </div>
  );
}

export default App;
