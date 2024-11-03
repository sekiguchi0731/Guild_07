// src/components/MainScreen.js
import React from "react";

function MainScreen({ amount, setAmount, onConvert }) {
  return (
    <div className="main-screen">
      <h1>金額入力</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="金額を入力してください"
      />
      <button onClick={onConvert}>イラストに変換</button>
    </div>
  );
}

export default MainScreen;
