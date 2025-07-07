import type { Coin } from '../../home/types/Coin.types';

interface Props {
  coin: Coin;
}

const CoinCard = ({ coin }: Props) => {
  return (
    <div className="bg-[#3B1C32] border border-[#6A1E55] p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 transition-transform hover:scale-105 hover:shadow-2xl">
      <img
        src={coin.image}
        alt={coin.name}
        className="w-16 h-16 rounded-full bg-[#1A1A1D] border-2 border-[#A64D79] shadow"
      />
      <h2 className="font-bold text-xl text-white tracking-tight flex items-center gap-2">
        {coin.name}
        <span className="uppercase text-sm text-[#A64D79]">({coin.symbol})</span>
      </h2>
      <p className="text-[#A64D79] font-semibold text-lg">
        ${coin.current_price.toLocaleString()}
      </p>
      <p className="text-[#6A1E55] text-sm">
        Market Cap: <span className="text-white">${coin.market_cap.toLocaleString()}</span>
      </p>
      <p
        className={
          coin.price_change_percentage_24h >= 0
            ? 'text-green-400 font-bold'
            : 'text-red-400 font-bold'
        }
      >
        {coin.price_change_percentage_24h >= 0 ? '+' : ''}
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CoinCard;
