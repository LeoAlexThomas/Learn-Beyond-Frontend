import { useState } from "react";
import InputField from "./InputField";
import { PrimaryButton } from "./Buttons";
import { toast } from "react-toastify";
import useApi from "../Hooks/makeApiCalls";
import { setToken } from "../utils/commonfn.js";
import { useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { useSWRConfig } from "swr";
import { Eye, EyeClosed } from "lucide-react";

const LoginForm = ({ onRegisterClicked }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading: isLoginProcessing, makeApiCall } = useApi();
  const { mutate } = useSWRConfig();

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    makeApiCall({
      url: "/auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
      onSuccess: (responseData) => {
        if (!responseData) {
          return;
        }
        const token = responseData.data.token;
        if (!token) {
          console.log("User token not found");
          toast.error("Something went wrong, please try again later");
          return;
        }
        setToken(token);
        mutate("/user/current");
        navigate("/");
        toast.success("Login successful");
      },
    });
  };

  return (
    <div className="flex flex-col items-stretch justify-center p-4 h-full w-full">
      <div className="font-Title text-3xl sm:text-5xl font-semibold text-center mb-4 sm:mb-8 text-primary">
        Login
      </div>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <InputField
          isRequired={true}
          name="email"
          title="Email"
          type="email"
          placeholder="Enter your email"
          onChange={setEmail}
          value={email}
          id="email"
        />
        <InputField
          isRequired={true}
          name="password"
          title="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          onChange={setPassword}
          value={password}
          id="password"
          rightIcon={
            showPassword ? (
              <Eye className="text-white h-6 w-6" />
            ) : (
              <EyeClosed className="text-white h-6 w-6" />
            )
          }
          onRightIconClicked={handleShowPassword}
        />
        <p className="text-xl font-bold text-end text-primary self-stretch">
          <a
            href={`/forgotPassword${
              isNil(email) || isEmpty(email) ? "" : `?email=${email}`
            }`}
          >
            Forgot password
          </a>
        </p>
        <PrimaryButton
          buttonLabel="LOGIN"
          type="submit"
          showBiggerButton={true}
          fullWidth={true}
          isLoading={isLoginProcessing}
          isDisabled={isLoginProcessing}
        />
        <p className="text-base text-text">
          Don't have an account?{" "}
          <a href="/register" target="_self">
            <span className="text-primary font-bold cursor-pointer underline">
              Register
            </span>
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
