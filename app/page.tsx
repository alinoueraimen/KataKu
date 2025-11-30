import Image from "next/image";
import QuizButton from "./components/quiz/QuizButton";
import ModeSelector from "./components/quiz/ModeSelector";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center text-center p-6">

        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          Selamat Datang!
        </h1>

        <h2 className="text-lg text-zinc-600 dark:text-zinc-300 mb-1">
          Mulai ngerjain apa hari ini?
        </h2>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          Pilih mode untuk memulai
        </p>

        {/* 👉 MODE SELECTOR ADA DI SINI */}
        <ModeSelector />

        <div className="w-full max-w-md mt-8">
          <QuizButton />
        </div>
      </div>
    </div>
  );
}
