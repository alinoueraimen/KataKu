import React from "react";

const OptionButton = ({ text, onClick, disabled, isCorrect, isWrong }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full py-4 rounded-xl font-semibold text-2xl transition-all
        ${
          isCorrect
            ? "bg-green-500 text-white"
            : isWrong
            ? "bg-red-500 text-white"
            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:scale-[0.98] active:scale-[0.95]"
        }
      `}
    >
      {text}
    </button>
  );
};

export default OptionButton;
