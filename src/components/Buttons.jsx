import { MoveRight } from "lucide-react";

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
        isDisabled ? "bg-primary opacity-50" : "bg-primary hover:bg-accent"
      } text-white text-base font-medium w-full max-w-full ${fullWidth ? "" : "sm:max-w-fit"} px-4 ${
        showBiggerButton ? "py-4" : "py-1.5"
      } border border-primary rounded-xl ${
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
        isDisabled ? "bg-grey-100 opacity-50" : "bg-white hover:bg-accent"
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
      className={`flex items-center justify-between gap-2 border-b border-primary text-text hover:text-primary hover:cursor-pointer text-base font-medium w-full bg-transparent`}
      type={type}
      onClick={onClick}
    >
      {buttonLabel} <MoveRight className="w-4 h-4" />
    </button>
  );
};

export { PrimaryButton, SecondaryButton, TertiaryButton };
