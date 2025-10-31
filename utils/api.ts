import axios from 'axios';
import useSWR from 'swr';

interface FetcherConfig<T> {
  url: string;
  initialData?: T;
}

const fetcher = <T>(url: string) => axios.get<T>(url).then((res) => res.data);

export const useApi = <T>({ url, initialData }: FetcherConfig<T>) => {
  const { data, error, isLoading, mutate } = useSWR<T>(url, fetcher<T>, {
    fallbackData: initialData,
    revalidateOnFocus: true,
    shouldRetryOnError: true,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};
