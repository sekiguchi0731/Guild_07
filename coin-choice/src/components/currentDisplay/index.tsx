// import './CurrencyDisplay.css'; // Optional: Add styles for the component

interface CurrencyDisplayProps {
  currencyCounts: { [key: number]: number };
  handleIncrease: (denom: number) => void;
  handleDecrease: (denom: number) => void;
}

function CurrencyDisplay({
  currencyCounts,
  handleIncrease,
  handleDecrease,
}: CurrencyDisplayProps) {
  const sortedDenominations = Object.keys(currencyCounts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className='currency-display'>
      {sortedDenominations.map((denom) => (
        <div key={denom} style={{ display: 'flex', alignItems: 'center' }}>
          <span className='denomination'>{denom}円</span>
          <span className='count'>{currencyCounts[denom]}枚</span>
          <div className='buttons'>
            <button onClick={() => handleIncrease(denom)}>+</button>
            <button
              onClick={() => handleDecrease(denom)}
              disabled={currencyCounts[denom] <= 0}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrencyDisplay;
