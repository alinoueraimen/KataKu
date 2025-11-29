import React from "react";

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-1">
        {current} / {total}
      </div>

      <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full">
        <div
          className="h-full bg-black dark:bg-white rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
