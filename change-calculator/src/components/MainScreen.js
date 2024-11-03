// src/components/MainScreen.js
import React from "react";

function MainScreen({ amount, setAmount, onConvert, showBills, setShowBills }) {
  return (
    <div className="main-screen">
      <h1>金額入力</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="金額を入力してください"
      />
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={showBills}
            onChange={(e) => setShowBills(e.target.checked)}
          />
          紙幣を含める
        </label>
      </div>
      <button onClick={onConvert}>コインに変換</button>
    </div>
  );
}

export default MainScreen;
