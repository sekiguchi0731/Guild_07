import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount } = location.state || { amount: 0 }; // Get amount from state

  // Redirect to Top if amount is not available
  useEffect(() => {
    if (!amount) {
      navigate('/'); // Redirect to Top component
    }
  }, [amount, navigate]);

  // Calculate the number of each coin and bill
  const calculateDenominations = (amount: number) => {
    const denominations: { [key: string]: number } = {
      '10000円': 0,
      '5000円': 0,
      '2000円': 0,
      '1000円': 0,
      '500円': 0,
      '100円': 0,
      '50円': 0,
      '10円': 0,
      '5円': 0,
      '1円': 0,
    };

    // Calculate the number of each denomination
    for (const denom of Object.keys(denominations)) {
      denominations[denom] = Math.floor(
        amount / parseInt(denom.replace('円', '')),
      );
      amount %= parseInt(denom.replace('円', ''));
    }

    return denominations;
  };

  const denominations = calculateDenominations(amount);

  return (
    <div>
      <h1>計算結果</h1>
      <ul>
        {Object.entries(denominations).map(([denom, count]) => (
          <li key={denom}>
            {denom}: {count}枚
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>戻る</button>
    </div>
  );
}

export default Results;
