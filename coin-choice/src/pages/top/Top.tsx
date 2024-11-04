import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Top.scss'


function Top() {
  const [amount, setAmount] = useState<string>('');
  const navigate = useNavigate();

  const handleCalculate = () => {
    const numericAmount = Number(amount);
    navigate('/results', {
      state: { amount: numericAmount },
    }); // 結果を渡す
  };

  return (
    <>
      <div className='top-container'>
        <div className='top input field'>
          金額を入力してください
        </div>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='金額を入力'
        />
        <button onClick={handleCalculate}>枚数を計算する</button>
      </div>
    </>
  );
}

export default Top;
