import { useEffect, useState } from 'react';
import { fetchCoins } from '../api/coins.api';
import type { Coin } from '../types/coin.types';

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCoins();
        setCoins(data);
      } catch (err: unknown) {
        setError('Failed to load coins');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { coins, loading, error };
};
