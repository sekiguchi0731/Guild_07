import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CurrencyDisplay from '../../components/currentDisplay';
import './index.css';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, showBills } = location.state || {
    amount: 0,
    showBills: true,
  };

  // Redirect to /top if amount is not available
  useEffect(() => {
    if (!amount) {
      navigate('/');
    }
  }, [amount, navigate]);

  // Calculate the number of each coin and bill
  const calculateCurrency = (value: number, includeBills: boolean) => {
    const denominations = includeBills
      ? [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1]
      : [500, 100, 50, 10, 5, 1];
    let remaining = value;
    const counts: { [key: number]: number } = {};

    denominations.forEach((denom) => {
      counts[denom] = Math.floor(remaining / denom);
      remaining %= denom;
    });

    return counts;
  };

  const initialDenominations = calculateCurrency(amount, showBills);
  const [currencyCounts, setCurrencyCounts] = useState(initialDenominations);

  const handleIncrease = (denom: number) => {
    setCurrencyCounts((prevCounts) => ({
      ...prevCounts,
      [denom]: prevCounts[denom] + 1,
    }));
  };

  const handleDecrease = (denom: number) => {
    setCurrencyCounts((prevCounts) => ({
      ...prevCounts,
      [denom]: Math.max(prevCounts[denom] - 1, 0),
    }));
  };

  return (
    <div>
      <h1>計算結果</h1>
      <CurrencyDisplay
        currencyCounts={currencyCounts}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <button onClick={() => navigate('/')}>戻る</button>
    </div>
  );
}

export default Results;
