export type Difficulty = "easy" | "medium" | "hard";;

export type Mode = "Timed(15s)" | "Timed(30s)" | "Timed(60s)" | "Passage";

export type SettingsContextType = {
  difficulty: Difficulty;
  mode: Mode;
  setDifficulty: (difficulty: Difficulty) => void;
  setMode: (mode: Mode) => void;
};

export type TypingContextType = {
  wpm: number;
  accuracy: number;
  time: number;
  errors: number;
  isTestRunning: boolean;
  startTest: () => void;
  endTest: () => void;
  resetTest: () => void;
};