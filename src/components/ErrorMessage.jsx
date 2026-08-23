import { TriangleAlert } from "lucide-react";

const ErrorMessage = ({ message, showFullScreen }) => {
  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center  ${
        showFullScreen ? "h-screen top-1/2" : ""
      }`}
    >
      <TriangleAlert className="text-danger w-10 h-10" />
      <p className="font-SubTitle text-base font-bold text-center text-error">
        {message ?? "Something went wrong"}
      </p>
    </div>
  );
};

export default ErrorMessage;
