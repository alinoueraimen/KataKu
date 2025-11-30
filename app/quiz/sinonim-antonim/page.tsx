"use client";
import React, { useState, useEffect } from "react"; // ⭐ IMPORT useEffect
import QuizBox from "@/app/components/quiz/QuizBox";
import { useRouter } from "next/navigation";

// Data pertanyaan statis (tidak berubah)
const initialQuestions = [
  { word: "besar", type: "sinonim", correct: "agung", options: ["kecil", "agung"] },
  { word: "tajam", type: "antonim", correct: "tumpul", options: ["tumpul", "terang"] },
  { word: "cepat", type: "sinonim", correct: "gesit", options: ["lambat", "gesit"] },
  { word: "muram", type: "antonim", correct: "ceria", options: ["kelam", "ceria"] },
];

function SinonimAntonimPage() {
  const router = useRouter(); 

  // ⭐ PERBAIKAN: Gunakan fungsi inisialisator untuk useState.
  const [questions] = useState(() => {
    // Buat salinan array dan acak salinan tersebut
    const shuffled = [...initialQuestions];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
  });

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  // ⭐ PERBAIKAN: Gunakan useEffect untuk Side Effect (Navigasi)
  useEffect(() => {
    // Navigasi ke halaman 'result' hanya jika current index sama dengan panjang total pertanyaan.
    if (current >= questions.length) {
      router.push('result');
    }
    // Dependency array memastikan ini berjalan saat 'current' berubah
  }, [current, questions.length, router]);


  // Pastikan kita tidak mengakses elemen di luar batas array sebelum navigasi dipicu
  const q = questions[current];

  // Jika q adalah undefined (kuis sudah selesai, tetapi useEffect belum memicu redirect), 
  // kita kembalikan null atau loading screen untuk menghindari error.
  if (!q) {
    // Kita bisa mengembalikan null atau loading screen sementara
    return (
      <div className="flex justify-center p-6 text-xl text-zinc-500 dark:text-zinc-400">
        Memuat hasil...
      </div>
    ); 
  }

  // Logika pembuatan teks pertanyaan
  const questionText =
    q.type === "sinonim"
      ? `Pilih sinonim dari kata: "${q.word}"`
      : `Pilih antonim dari kata: "${q.word}"`;
  
      
  return (
    <div className="flex justify-center p-6">
      <QuizBox
        question={questionText}
        options={q.options}
        correct={q.correct}
        current={current + 1}
        total={questions.length}
        onNext={handleNext}
      />
    </div>
  );
}

export default SinonimAntonimPage;