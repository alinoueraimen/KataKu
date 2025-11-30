"use client";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { useGlobalContext } from "@/app/context/GlobalProvider";

export default function ModeSelector() {
  const options = [
    { id: "kata-baku", label: "Kata Baku" },
    { id: "sinonim-antonim", label: "Sinonim & Antonim" },
    { id: "makna-kata", label: "Makna Kata" },
    { id: "kalimat-efektif", label: "Kalimat Efektif" },
    { id: "eyd", label: "EYD" },
    { id: "ide-pokok", label: "Ide Pokok" },
  ];

  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const { setQuizId } = useGlobalContext();

  const handleSelect = (value) => {
    if (!selected.find((i) => i.id === value.id)) {
      setSelected([...selected, value]);
    }

    // SET QUIZ ID untuk start button
    setQuizId(value.id);

    setOpen(false);
  };

  const removeItem = (item) => {
    setSelected(selected.filter((i) => i.id !== item.id));
  };

  return (
    <div className="w-full max-w-md flex flex-col items-start gap-5 relative">

      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Pilih kategori tes
      </label>

      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 rounded-xl border border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 flex justify-between items-center shadow-sm hover:shadow-md transition"
      >
        <span className="text-sm">
          {selected.length === 0 ? "Pilih kategori..." : "Tambah kategori..."}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[95px] w-full z-20 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow-lg p-2 animate-in fade-in zoom-in-95 duration-150">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-100 transition"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Selected Tags */}
      <div className="flex flex-wrap gap-3">
        {selected.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 px-4 py-1.5 rounded-full shadow-sm"
          >
            <span className="text-sm font-medium">{item.label}</span>

            <button
              onClick={() => removeItem(item)}
              className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition"
            >
              <X size={15} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}