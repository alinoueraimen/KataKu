'use client'
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Mengganti nama fungsi sesuai konvensi
export default function HasilQuizPage() { 
    const score = 2; // contoh
    const total = 3;
    const router = useRouter();
    
    const handleBacktoMenu = () => {
        router.push('/')
    }
    
    // KESALAHAN DIPERBAIKI: Tambahkan '()' dan tanda panah '=>'
    const handleTryAgain = () => {
        // Path '/ejaanbaku' adalah absolute, ini sudah bagus
        router.push('ejaanbaku');
    }
    
    const percentage = Math.round((score / total) * 100);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 shadow-xl p-8 text-center"
            >
                <h1 className="text-2xl font-bold mb-3 dark:text-white">
                    Hasil Quiz
                </h1>

                <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                    Kamu menjawab{" "}
                    <span className="font-semibold text-black dark:text-white">
                        {score}
                    </span>{" "}
                    dari{" "}
                    <span className="font-semibold text-black dark:text-white">
                        {total}
                    </span>{" "}
                    soal dengan benar.
                </p>

                <div className="text-6xl font-extrabold mb-6 dark:text-white">
                    {percentage}%
                </div>

                <div className="flex flex-col gap-3">
                    <button 
                        className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold"
                        onClick={handleTryAgain}
                    >
                        Coba Lagi
                    </button>

                    <button 
                        className="w-full py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-black dark:text-white font-medium" 
                        onClick={handleBacktoMenu}
                    >
                        Kembali ke Menu
                    </button>
                </div>
            </motion.div>
        </div>
    );
}