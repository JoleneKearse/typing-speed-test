/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, type ReactNode } from "react";

import type { TypingContextType } from "../types/types";

export const TypingContext = createContext<TypingContextType | null>(null);

export const TypingProvider = ({ children }: { children: ReactNode }) => {
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [time, setTime] = useState<number>(600);
  const [errors, setErrors] = useState<number>(0);
  const [isTestRunning, setIsTestRunning] = useState<boolean>(false);

  const startTest = () => {
    setIsTestRunning(true);
  };

  const endTest = () => {
    setIsTestRunning(false);
  };

  const resetTest = () => {
    setWpm(0);
    setAccuracy(100);
    setTime(0);
    setErrors(0);
    setIsTestRunning(false);
  };

  return (
    <TypingContext.Provider
      value={{
        wpm,
        accuracy,
        time,
        errors,
        isTestRunning,
        startTest,
        endTest,
        resetTest,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};
