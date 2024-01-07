import { useQuery } from '@tanstack/react-query';
import { CurrencyCode } from '../../../types';
import { internationalPaymentApi } from '../api';

type Props = {
  base: CurrencyCode,
  target: CurrencyCode,
}

const useGetExchangeRate = ({ base, target }: Props) => {
  const {
    data, isFetching, error, isSuccess, isError,
  } = useQuery({
    queryKey: [`${base}-${target}-exchange-rate`],
    queryFn: async () => {
      const res = await internationalPaymentApi.getExchangeRate(base, target)
      return res?.rates?.[target]
    },
    enabled: !!base && !!target,
    retry: 0,
  });

  return {
    rate: data ?? 1,
    isFetching,
    isSuccess,
    error,
    isError,
  };
};

export { useGetExchangeRate };
