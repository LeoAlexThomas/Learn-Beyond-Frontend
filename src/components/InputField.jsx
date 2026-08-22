import isNil from "lodash/isNil";

const InputField = ({
  id,
  type,
  title,
  isRequired,
  name,
  value,
  onChange,
  placeholder,
  rightIcon,
  onRightIconClicked,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full  mx-auto">
      {!isNil(title) && (
        <p className="font-SubTitle text-base sm:text-lg font-bold text-black">
          {title} {isRequired ? <span className="text-red-400">*</span> : ""}
        </p>
      )}
      <div className="flex gap-2 border rounded-xl bg-white items-stretch">
        <input
          id={id}
          type={type}
          name={name}
          required={isRequired}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`p-4 ${!isNil(rightIcon) ? "pr-0" : ""} w-full font-body text-base font-medium outline-none bg-white rounded-xl text-black`}
        />
        {!isNil(rightIcon) && (
          <div
            className="bg-primary hover:bg-primary-hover cursor-pointer p-4 self-center rounded-r-lg"
            onClick={onRightIconClicked}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
