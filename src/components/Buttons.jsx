const PrimaryButton = ({
  buttonLabel,
  onClick,
  type,
  fullWidth,
  isLoading,
  isDisabled,
  showBiggerButton,
}) => {
  return (
    <button
      className={`${
        isDisabled
          ? "bg-primary-hover opacity-50"
          : "bg-primary hover:bg-primary-hover"
      } text-white text-base font-medium rounded-xl w-full max-w-full ${
        showBiggerButton ? "py-4" : "py-1.5"
      } px-4  ${fullWidth ? "" : "sm:max-w-fit"} ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonLabel}{" "}
      {isLoading && (
        <i className="fa-solid fa-spinner fa-spin-pulse text-white fa-lg"></i>
      )}
    </button>
  );
};

const SecondaryButton = ({
  buttonLabel,
  onClick,
  type,
  showBiggerButton,
  fullWidth,
  isLoading,
  isDisabled,
}) => {
  return (
    <button
      className={`${
        isDisabled ? "bg-grey-100 opacity-50" : "bg-white hover:bg-gray-50"
      } text-primary text-base font-medium rounded-xl w-full max-w-full ${
        showBiggerButton ? "py-4" : "py-1.5"
      } px-4 border border-primary ${fullWidth ? "" : "sm:max-w-fit"} ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonLabel}{" "}
      {isLoading && (
        <i className="fa-solid fa-spinner fa-spin-pulse text-white fa-lg"></i>
      )}
    </button>
  );
};

const TertiaryButton = ({ buttonLabel, onClick, type, fullWidth }) => {
  return (
    <button
      className={`bg-tertiary hover:bg-tertiary-hover text-white text-base font-medium rounded-xl w-full max-w-full py-1.5 px-4 ${
        fullWidth ? "" : "sm:max-w-fit"
      }`}
      type={type}
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, TertiaryButton };
