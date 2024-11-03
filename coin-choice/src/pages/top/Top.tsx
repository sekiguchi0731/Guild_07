import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from '../../components/header';

function Top() {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleCalculate = () => {
    // Navigate to results page with the amount as state
    navigate('/results', { state: { amount: Number(amount) } }); // Pass amount as state
  };

  return (
    <>
      <HeaderBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <h1>金額を入力してください</h1>
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
