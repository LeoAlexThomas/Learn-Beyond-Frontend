import { isNil } from "lodash";
import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

const AsyncSelectField = ({
  id,
  title,
  isRequired,
  name,
  value,
  onChange,
  loadOptions,
  defaultOptions = [],
  placeholder = "Select an option",
  isClearable = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Sync selected option when value/defaultOptions change
  useEffect(() => {
    if (isNil(value) || value === "") {
      setSelectedOption(null);
      return;
    }

    const option = defaultOptions.find(
      (item) => String(item.value) === String(value),
    );

    if (option) {
      setSelectedOption(option);
    }
  }, [value, defaultOptions]);

  const handleChange = (option) => {
    setSelectedOption(option);

    // Same behavior as your old select
    onChange(option ? option.value : "");

    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 items-stretch relative w-full">
      {!isNil(title) && (
        <p className="font-SubTitle text-base sm:text-lg font-bold text-black">
          {title}
          {isRequired && <span className="text-red-400"> *</span>}
        </p>
      )}

      <AsyncSelect
        inputId={id}
        instanceId={id}
        name={name}
        value={selectedOption}
        onChange={handleChange}
        loadOptions={loadOptions}
        defaultOptions={defaultOptions}
        cacheOptions
        isClearable={isClearable}
        placeholder={placeholder}
        noOptionsMessage={() => "No options found"}
        loadingMessage={() => "Loading..."}
        onMenuOpen={() => setIsDropdownOpen(true)}
        onMenuClose={() => setIsDropdownOpen(false)}
        classNames={{
          control: () =>
            "!border !rounded-xl !bg-white !min-h-[58px] !shadow-none",
          valueContainer: () => "!px-4",
          input: () => "!m-0",
          indicatorsContainer: () => "!pr-2",
          menu: () => "!z-50",
          option: () => "!cursor-pointer",
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default AsyncSelectField;
