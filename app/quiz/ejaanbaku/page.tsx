"use client";

import React, { useEffect, useState } from "react";
import QuizBox from "@/app/components/quiz/QuizBox";
import { useRouter } from "next/navigation";
function page() {
  const questions = [
    { a: "resiko", b: "risiko", correct: "risiko" },
    { a: "aktifitas", b: "aktivitas", correct: "aktivitas" },
    { a: "ijin", b: "izin", correct: "izin" },
  ];
  const route = useRouter();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      route.push('result');
    }
  };

  const q = questions[index];
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <QuizBox
        optionA={q.a}
        optionB={q.b}
        correct={q.correct}
        current={index + 1}
        total={questions.length}
        onNext={handleNext}
      />
    </div>
  );
}

export default page;
