import isNil from "lodash/isNil";
import React from "react";

const Loading = ({ showFullScreen, loadingLabel, hideLabel }) => {
  return (
    <div
      className={`flex flex-col gap-6 justify-center items-center ${
        showFullScreen ? "h-screen top-1/2" : ""
      }`}
    >
      <i className="fa-solid fa-spinner fa-spin-pulse text-primary fa-2xl"></i>
      {isNil(hideLabel) && (
        <p className="text-lg font-medium text-center text-black">
          {loadingLabel ?? "Loading"}
        </p>
      )}
    </div>
  );
};

export default Loading;
