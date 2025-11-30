// context/GlobalProvider.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// --- 1. Definisi Tipe Data (Interfaces) ---

// Interface untuk nilai User (jika ada)
interface User {
  id: string;
  name: string;
  email: string;
  // ... properti lain
}

// Interface untuk nilai yang disediakan oleh Context (State dan Setter/Actions)
interface GlobalContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
    quizId: string | null;
  setQuizId: (id: string | null) => void;

}

// Interface untuk Props Provider (untuk mendefinisikan tipe 'children')
interface GlobalProviderProps {
  children: ReactNode; // ReactNode adalah tipe standar untuk children di React/Next.js
}

// --- 2. Inisialisasi Context ---

// Inisialisasi dengan nilai default (yang sesuai dengan GlobalContextType) atau undefined.
// Kita menggunakan 'undefined' dan memaksakan tipenya saat inisialisasi.
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// --- 3. Komponen Provider ---

export function GlobalProvider({ children }: GlobalProviderProps) {
  // 2. State yang ingin Anda bagikan, definisikan tipenya
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<User | null>(null);
 const [quizId, setQuizId] = useState<string | null>(null); 
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // 3. Nilai yang akan disediakan (provided)
  // Pastikan strukturnya cocok dengan GlobalContextType
  const contextValue: GlobalContextType = {
    theme,
    toggleTheme,
    user,
    setUser,
    quizId,
    setQuizId
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

// --- 4. Hook kustom untuk kemudahan penggunaan ---

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  
  // Memeriksa apakah hook digunakan di luar Provider
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  
  return context;
};