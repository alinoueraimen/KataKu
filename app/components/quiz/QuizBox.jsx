import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";

const QuizBox = ({ optionA, optionB, correct, current, total, onNext }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (choice) => {
    if (selected) return; // prevent double click
    setSelected(choice);

  };
  const handleNextQuestion=()=>{   
      onNext(); // lanjut soal berikutnya
      setSelected(null);
    }
  return (
    <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 space-y-6">
      
      <ProgressBar current={current} total={total} />

      <h2 className="text-center text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        Mana yang baku?
      </h2>

      <OptionButton
        text={optionA}
        onClick={() => handleSelect(optionA)}
        disabled={!!selected}
        isCorrect={selected && optionA === correct}
        isWrong={selected && optionA !== correct}
      />

      <OptionButton
        text={optionB}
        onClick={() => handleSelect(optionB)}
        disabled={!!selected}
        isCorrect={selected && optionB === correct}
        isWrong={selected && optionB !== correct}
      />

      {selected && (
        <div className="flex flex-col items-center justify-center">
        <p className="text-center text-zinc-600 dark:text-zinc-300 text-sm mt-2">
          {selected === correct
            ? "Benar!"
            : `Salah! Yang baku: ${correct}`}
        </p>
          <button className="px-5 py-3 border-lg border-2 text-semibold" onClick={handleNextQuestion}>
        selanjutnya
      </button>
        </div>
      )}
    
    </div>
  );
};

export default QuizBox;
