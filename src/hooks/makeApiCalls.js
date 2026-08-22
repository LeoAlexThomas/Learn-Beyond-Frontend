import { useState } from "react";
import api from "../Utils/api";
import { toast } from "react-toastify";

// Used this hook for making api call for methods like [POST, PUT, PATCH, DELETE]
const useApi = () => {
  // handing loading state commonly here
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCall = async ({
    method,
    url,
    data,
    onSuccess,
    onError,
    headers,
  }) => {
    setIsLoading(true);
    try {
      // Making api call based on the parameters
      const response = await api({
        method,
        url,
        data,
        headers: { ...headers },
      });
      setIsLoading(false);
      // Handling error of api call
      if (response.success === false) {
        console.log("API call error: ", response.message);
        if (!onError) {
          // Showing error toast message
          toast.error(
            response.message ?? "Something went wrong, please try again later",
          );
        } else {
          onError(response);
        }
        return;
      }
      // Handling success of api call
      console.log("API call response: ", response.data);
      onSuccess && onSuccess(response.data);
      return response.data;
    } catch (error) {
      // Handling error of api call
      setIsLoading(false);
      console.log("API call error: ", error);
      return;
    }
  };

  return { isLoading, makeApiCall };
};

export default useApi;
