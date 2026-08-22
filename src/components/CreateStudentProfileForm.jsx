import { useState } from "react";
import { toast } from "react-toastify";
import useApi from "../Hooks/makeApiCalls";
import InputField from "./InputField";
import { PrimaryButton } from "./Buttons";
import { Eye, EyeClosed } from "lucide-react";

const CreateStudentProfileForm = () => {
  const [bio, setBio] = useState("");
  const [preferredSubjects, setPreferredSubjects] = useState([]);
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [preferredTimezone, setPreferredTimezone] = useState("");
  const [timezone, setTimezone] = useState("");
  const [learningGoals, setLearningGoals] = useState("");
  const [preferences, setPreferences] = useState("");

  const { isLoading: isRegisterProcessing, makeApiCall } = useApi();

  const resetValues = () => {
    setBio("");
    setPreferredSubjects([]);
    setPreferredLanguage("");
    setPreferredTimezone("");
    setTimezone("");
    setLearningGoals("");
    setPreferences("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    makeApiCall({
      url: "/student/register",
      method: "POST",
      data: {
        bio,
        preferredSubjects,
        preferredLanguage,
        preferredTimezone,
        timezone,
        learningGoals,
        preferences,
        password,
      },
      onSuccess: (response) => {
        if (!response) {
          return;
        }
        toast.success(response.message ?? "Profile creation successful");
        resetValues();
        window.location.href = `/dashboard`;
      },
    });
  };

  return (
    <div className="flex flex-col items-stretch justify-start w-full h-full max-w-full sm:max-w-180 mx-auto">
      <div className="font-Title text-3xl sm:text-5xl font-semibold text-center mb-4 sm:mb-8 text-primary">
        Student Profile
      </div>
      <form
        className="flex flex-col gap-4 justify-between"
        onSubmit={handleSubmit}
      >
        <InputField
          isRequired={true}
          name="bio"
          title="Bio"
          type="text"
          placeholder="Enter your bio"
          onChange={setBio}
          value={bio}
          id="bio"
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
      </form>
    </div>
  );
};

export default CreateProfileForm;
