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
      // Handling success of api call
      console.log("API call response: ", response.data);
      if (!onSuccess) {
        toast.success(response.data.message ?? "Success");
      } else {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      // Handling error of api call
      setIsLoading(false);
      console.log("API call error: ", error.response.data);
      if (!onError) {
        // Showing error toast message
        toast.error(
          error.response.data.message ??
            "Something went wrong, please try again later",
        );
      } else {
        onError(error.response.data);
      }
      return;
    }
  };

  return { isLoading, makeApiCall };
};

export default useApi;
