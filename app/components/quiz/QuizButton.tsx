"use client"
// import { startQuiz } from "@/app/actions/quiz"
import { useRouter } from "next/navigation"
import React from "react"
import { useGlobalContext } from "@/app/context/GlobalProvider";
export default function QuizButton(){
    const router = useRouter();
    const {quizId} = useGlobalContext();
    const handleStartQuiz = ( )=>{
        
        router.push(`quiz/${quizId}`)
    }
    return(
        <button className="hover:cursor-pointer border-2 px-3 py-2 rounded-lg shadow-2xl " onClick={handleStartQuiz}>
      start quiz
     </button>
    )
}