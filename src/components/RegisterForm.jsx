import { useState } from "react";
import { toast } from "react-toastify";
import useApi from "../Hooks/makeApiCalls";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { PrimaryButton } from "./Buttons";
import { Eye, EyeClosed } from "lucide-react";
import { getUserRoleLabel, userRoles } from "../utils/commonfn";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading: isRegisterProcessing, makeApiCall } = useApi();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const resetValues = () => {
    setName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    makeApiCall({
      url: "/auth/register",
      method: "POST",
      data: {
        name,
        email,
        password,
      },
      onSuccess: (response) => {
        if (!response) {
          return;
        }
        toast.success(response.message ?? "Registration successful");
        resetValues();
        window.location.href = `/${response.data.id}/createProfile`;
      },
    });
  };

  return (
    <div className="flex flex-col items-stretch justify-start w-full h-full">
      <div className="font-Title text-3xl sm:text-5xl font-semibold text-center mb-4 sm:mb-8 text-primary">
        Register
      </div>
      <form
        className="flex flex-col gap-4 justify-between"
        onSubmit={handleSubmit}
      >
        <InputField
          isRequired={true}
          name="name"
          title="Name"
          type="text"
          placeholder="Enter your name"
          onChange={setName}
          value={name}
          id="name"
        />
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
        <SelectField
          id="role"
          options={userRoles.map((role) => ({
            value: role,
            label: getUserRoleLabel(role),
          }))}
          name="role"
          title="Role"
          isRequired={true}
          onChange={setRole}
          value={role}
        />
        <div className="w-full mt-4">
          <PrimaryButton
            buttonLabel="REGISTER"
            type="submit"
            showBiggerButton={true}
            fullWidth={true}
            isLoading={isRegisterProcessing}
            isDisabled={isRegisterProcessing}
          />
        </div>
        <p className="text-base text-center">
          Already have an account?{" "}
          <a href="/login" target="_self">
            <span className="text-primary font-bold cursor-pointer underline">
              Login
            </span>
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
