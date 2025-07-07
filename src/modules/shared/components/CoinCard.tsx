import type { Coin } from '../../home/types/coin.types';

interface Props {
  coin: Coin;
}

const CoinCard = ({ coin }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <img src={coin.image} alt={coin.name} className="w-10 h-10" />
      <h2 className="font-bold text-lg">{coin.name} ({coin.symbol.toUpperCase()})</h2>
      <p>Price: ${coin.current_price.toLocaleString()}</p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
      <p className={coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CoinCard;
