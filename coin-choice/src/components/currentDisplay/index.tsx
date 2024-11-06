import './index.scss'

interface CurrencyDisplayProps {
  currencyCounts: { [key: number]: number };
  handleDecrease: (denom: number) => void;
  currentMoney: number; // 計算したい金額
}

function CurrencyDisplay({
  currencyCounts,
}: CurrencyDisplayProps) {
  // sortedDenominationsを定義（例として、通貨の種類を配列で定義）
  const sortedDenominations = Object.keys(currencyCounts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className='currency-display'>
      {sortedDenominations.map(
        (
          denom: number, // 型を明示的に指定
        ) => (
          <div key={denom} style={{ display: 'flex', alignItems: 'center' }}>
            <span className='denomination'>{denom}円</span>
            <span className='count'>{currencyCounts[denom]}枚</span>
          </div>
        ),
      )}
    </div>
  );
}

export default CurrencyDisplay;
