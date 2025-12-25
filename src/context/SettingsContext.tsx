/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, type ReactNode } from "react";

import type { SettingsContextType, Difficulty, Mode } from "../types/types";

export const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>("hard");

  const [mode, setMode] = useState<Mode>("Timed(60s)");

  return (
    <SettingsContext.Provider
      value={{ difficulty, mode, setDifficulty, setMode }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
