"use client"
// import { startQuiz } from "@/app/actions/quiz"
import { useRouter } from "next/navigation"
import React from "react"

export default function QuizButton(){
    const router = useRouter();
    const handleStartQuiz = ( )=>{
        
        router.push("quiz/ejaanbaku")
    }
    return(
        <button className="hover:cursor-pointer border-2 px-3 py-2 rounded-lg shadow-2xl " onClick={handleStartQuiz}>
      start quiz
     </button>
    )
}