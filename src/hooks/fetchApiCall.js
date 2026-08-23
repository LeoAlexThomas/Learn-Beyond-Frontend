import useSWR from "swr";
import api from "../Utils/api";

const useFetchApiCall = ({ url }) => {
  const { data, error, isLoading, mutate } = useSWR(url, api);
  return {
    isLoading,
    data: data?.data,
    error,
    mutate,
  };
};

export default useFetchApiCall;
