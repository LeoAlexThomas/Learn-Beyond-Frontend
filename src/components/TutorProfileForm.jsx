import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import {
  defaultLanguages,
  defaultQualifications,
  defaultSubjects,
  defaultTimezones,
} from "../utils/commonfn";
import { PrimaryButton } from "./Buttons";
import useApi from "../Hooks/makeApiCalls";
import { toast } from "react-toastify";
import { isNil } from "lodash";
import { mutate } from "swr";

const TutorProfileForm = () => {
  const [headline, setHeadline] = useState(null);
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState(null);
  const [hourlyRate, setHourlyRate] = useState(null);
  const [bio, setBio] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [timezone, setTimezone] = useState(null);

  const { isLoading, makeApiCall } = useApi();

  const resetValues = () => {
    setHeadline(null);
    setQualifications([]);
    setExperience(null);
    setHourlyRate(null);
    setBio(null);
    setSubjects([]);
    setLanguages(null);
    setTimezone(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isNil(bio) ||
      isNil(subjects) ||
      isNil(languages) ||
      isNil(qualifications) ||
      isNil(experience) ||
      isNil(hourlyRate) ||
      isNil(timezone)
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    console.log(
      bio,
      experience,
      hourlyRate,
      subjects,
      languages,
      qualifications,
      timezone,
    );
    makeApiCall({
      url: "/profile/tutor/create",
      method: "POST",
      data: {
        bio,
        subjects: subjects.map((subject) => subject.value),
        languages: languages.map((language) => language.value),
        timezone: timezone.value,
        headline,
        qualifications: qualifications.map(
          (qualification) => qualification.value,
        ),
        experience: parseInt(experience),
        hourlyRate: parseInt(hourlyRate),
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
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-stretch gap-4 w-full">
        <InputField
          id="headline"
          name="headline"
          type="text"
          title="Headline"
          placeholder="Your headline"
          value={headline}
          onChange={setHeadline}
        />
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
          id="experience"
          name="experience"
          type="number"
          title="Experience (in years)"
          placeholder="Experience"
          value={experience}
          onChange={setExperience}
          isRequired
        />
        <InputField
          id="hourlyRate"
          name="hourlyRate"
          type="number"
          title="Hourly Rate (in INR)"
          placeholder="Hourly Rate"
          value={hourlyRate}
          onChange={setHourlyRate}
          isRequired
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
          id="qualifications"
          name="qualifications"
          title="Qualifications"
          value={qualifications}
          onChange={setQualifications}
          options={defaultQualifications}
          isMulti
          isRequired
        />
        <SelectField
          id="language"
          name="language"
          title="Language"
          value={languages}
          onChange={setLanguages}
          options={defaultLanguages}
          isMulti
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
          buttonLabel="CREATE PROFILE"
          type="submit"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default TutorProfileForm;
