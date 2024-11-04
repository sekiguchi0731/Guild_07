import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CurrencyDisplay from '../../components/currentDisplay';
import HeaderBar from '../../components/header';
import './Results.scss';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount } = location.state || 0;
  const [fixedCounts, setFixedCounts] = useState<{ [key: number]: number }>({});
  const [currencyCounts, setCurrencyCounts] = useState<{
    [key: number]: number;
  }>({});

  // Redirect to /top if amount is not available
  useEffect(() => {
    if (!amount) {
      navigate('/');
    }
  }, [amount, navigate]);

  // Calculate the number of each coin and bill
  const calculateCurrency = (
    value: number,
    fixedCounts: { [key: number]: number },
  ) => {
    const denominations = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
    let remaining = value;
    const counts: { [key: number]: number } = {};

    // 固定された枚数を適用
    Object.keys(fixedCounts).forEach((denomStr) => {
      const denom = parseInt(denomStr, 10);
      const count = fixedCounts[denom];
      counts[denom] = count;
      remaining -= denom * count;
    });

    // 残りの金額を他の通貨単位で計算
    denominations.forEach((denom) => {
      if (fixedCounts[denom]) {
        return; // 固定された場合はスキップ
      }
      counts[denom] = Math.floor(remaining / denom);
      remaining %= denom;
    });

    return counts;
  };

  // 初期計算
  useEffect(() => {
    setCurrencyCounts(calculateCurrency(amount, fixedCounts));
  }, [amount, fixedCounts]);


  const handleDecrease = (denom: number) => {
    setFixedCounts((prevCounts) => ({
      ...prevCounts,
      [denom]: Math.max(
        (denom in prevCounts ? prevCounts[denom] : currencyCounts[denom]) - 1,
        0,
      ),
    }));
  };

  return (
    <>
      <HeaderBar />
      <div className='results-container'>
        <h1>計算結果</h1>
        <span>{amount}yen</span>
        <CurrencyDisplay
          currencyCounts={currencyCounts}
          handleDecrease={handleDecrease}
          currentMoney={amount}
        />
        <button onClick={() => navigate('/')}>戻る</button>
      </div>
    </>
  );
}

export default Results;
