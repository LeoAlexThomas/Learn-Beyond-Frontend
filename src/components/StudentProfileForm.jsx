import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import {
  defaultLanguages,
  defaultSubjects,
  defaultTimezones,
} from "../utils/commonfn";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import useApi from "../Hooks/makeApiCalls";
import { toast } from "react-toastify";
import { isNil } from "lodash";
import { mutate } from "swr";

const StudentProfileForm = () => {
  const [bio, setBio] = useState(null);
  const [learningGoal, setLearningGoal] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [language, setLanguage] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [preferences, setPreferences] = useState(null);

  const { isLoading, makeApiCall } = useApi();

  const resetValues = () => {
    setBio(null);
    setLearningGoal(null);
    setSubjects([]);
    setLanguage(null);
    setTimezone(null);
    setPreferences(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(bio, learningGoal, subjects, language, timezone, preferences);

    if (
      isNil(bio) ||
      isNil(learningGoal) ||
      isNil(subjects) ||
      isNil(language) ||
      isNil(timezone) ||
      isNil(preferences)
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    makeApiCall({
      url: "/profile/student/create",
      method: "POST",
      data: {
        bio,
        learningGoals: learningGoal,
        preferences,
        preferredSubjects: subjects.map((subject) => subject.value),
        preferredLanguage: language.value,
        timezone: timezone.value,
      },
      onSuccess: (response) => {
        if (!response) {
          return;
        }
        toast.success(response.message ?? "Profile created successful");
        resetValues();
        mutate("/auth/me");
      },
    });
  };

  return (
    <form
      className="flex flex-col gap-4 items-center border border-gray-400 p-4 rounded-xl shadow-md shadow-shadow"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg sm:text-2xl font-bold text-primary">
        CREATE YOUR PROFILE
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-stretch gap-4 w-full">
        <InputField
          id="bio"
          name="bio"
          type="text"
          title="Bio"
          placeholder="Your bio"
          isRequired
          value={bio}
          onChange={setBio}
        />
        <InputField
          id="learningGoal"
          name="learningGoal"
          type="text"
          title="Learning Goal"
          placeholder="Your learning goal"
          isRequired
          value={learningGoal}
          onChange={setLearningGoal}
        />
        <InputField
          id="preferences"
          name="preferences"
          type="text"
          title="Preferences"
          placeholder="Your preferences"
          isRequired
          value={preferences}
          onChange={setPreferences}
        />
        <SelectField
          id="subject"
          isMulti
          name="subjects"
          title="Subjects"
          value={subjects}
          onChange={setSubjects}
          options={defaultSubjects}
          isRequired
        />
        <SelectField
          id="language"
          name="language"
          title="Language"
          value={language}
          onChange={setLanguage}
          options={defaultLanguages}
          isRequired
        />
        <SelectField
          id="timezone"
          name="timezone"
          title="Timezone"
          value={timezone}
          onChange={setTimezone}
          options={defaultTimezones}
          isRequired
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 ">
        <PrimaryButton
          buttonLabel="UPDATE"
          type="submit"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default StudentProfileForm;
