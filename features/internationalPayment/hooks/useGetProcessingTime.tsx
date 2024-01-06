import { useQuery } from '@tanstack/react-query';
import { CurrencyCode } from '../../../types';
import { internationalPaymentApi } from '../api';

type Props = {
  base: CurrencyCode,
  target: CurrencyCode,
}

const useGetProcessingTime = ({ base, target }: Props) => {
  const {
    data, isFetching, error, isSuccess, isError,
  } = useQuery({
    queryKey: [`${base}-${target}-processing-time`],
    queryFn: () =>
    internationalPaymentApi.getProcessingTime(base, target),
    enabled: !!base && !!target,
    retry: 0,
  });

  return {
    data,
    isFetching,
    isSuccess,
    error,
    isError,
  };
};

export { useGetProcessingTime };
