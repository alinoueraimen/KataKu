"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";

const QuizBox = ({ 
  question = "Pilih jawaban yang benar", 
  options = [],        // array pilihan
  correct,             // string jawaban benar
  current, 
  total, 
  onNext 
}) => {

  const [selected, setSelected] = useState(null);

  const handleSelect = (choice) => {
    if (selected) return;
    setSelected(choice);
  };

  const handleNext = () => {
    setSelected(null);
    onNext();
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 space-y-6">

      <ProgressBar current={current} total={total} />

      {/* QUESTION TEXT */}
      <h2 className="text-center text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {question}
      </h2>

      {/* OPTIONS — MAP, NOT HARDCODED */}
      <div className="space-y-3">
        {options.map((opt, i) => (
          <OptionButton
            key={i}
            text={opt}
            onClick={() => handleSelect(opt)}
            disabled={!!selected}
            isCorrect={selected && opt === correct}
            isWrong={selected && opt !== correct}
          />
        ))}
      </div>

      {/* FEEDBACK + NEXT BUTTON */}
      {selected && (
        <div className="flex flex-col items-center justify-center mt-2">
          <p className="text-center text-zinc-600 dark:text-zinc-300 text-sm mb-3">
            {selected === correct
              ? "Benar!"
              : `Salah! Jawaban: ${correct}`}
          </p>

          <button
            onClick={handleNext}
            className="px-5 py-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Selanjutnya
          </button>
        </div>
      )}

    </div>
  );
};

export default QuizBox;
