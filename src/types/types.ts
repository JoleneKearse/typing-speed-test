export const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"] as const;
export type Difficulty = (typeof DIFFICULTY_LEVELS)[number];

export const MODES = ["Timed(60s)", "Passage"] as const;
export type Mode = typeof MODES[number];

export type SettingsContextType = {
  difficulty: Difficulty;
  mode: Mode;
  setDifficulty: (difficulty: Difficulty) => void;
  setMode: (mode: Mode) => void;
};