import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from '../../components/header';

// 通貨のカウントを表す型を定義
type CurrencyCounts = {
  [denom: number]: number; // 数値をキーとするオブジェクト
};

// 通貨計算関数の戻り値の型を定義
const calculateCurrency = (
  value: number,
  overrideCounts: CurrencyCounts = {},
): CurrencyCounts | undefined => {
  const denominations = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  let remaining = value;
  const counts: CurrencyCounts = {};

  Object.keys(overrideCounts).forEach((denom) => {
    const denomValue = parseInt(denom, 10);
    const count = overrideCounts[denomValue as keyof CurrencyCounts];
    counts[denomValue] = count; // 型を明示的に指定
    remaining -= denomValue * count;
  });

  if (remaining < 0) {
    alert('選択された枚数により金額が超過しています。調整してください。');
    return;
  }

  denominations.forEach((denom) => {
    if (overrideCounts[denom]) {
      return; // オーバーライドされた場合はスキップ
    }
    counts[denom] = Math.floor(remaining / denom);
    remaining %= denom;
  });

  return counts; // 計算結果を返す
};

function Top() {
  const [amount, setAmount] = useState<string>('');
  const [showBills] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleCalculate = () => {
    const numericAmount = Number(amount);
    const currencyCounts = calculateCurrency(numericAmount); // 通貨計算を呼び出す
    navigate('/results', {
      state: { amount: numericAmount, showBills, currencyCounts },
    }); // 結果を渡す
  };

  return (
    <>
      <HeaderBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '16vh',
        }}
      >
        <div style={{ marginBottom: '20px', fontSize: '20px' }}>
          金額を入力してください
        </div>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='金額を入力'
          style={{ marginBottom: '20px' }}
        />
        <button onClick={handleCalculate}>枚数を計算する</button>
      </div>
    </>
  );
}

export default Top;
