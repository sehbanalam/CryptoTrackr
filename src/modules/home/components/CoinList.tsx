import { useCoins } from '../hooks/useCoins';
import CoinCard from '../../shared/components/coinCard';

const CoinList = () => {
  const { coins, loading, error } = useCoins();

  if (loading) return <p>Loading coins...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coins.map(coin => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;
