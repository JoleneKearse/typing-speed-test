import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import passages from "../../data.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomPassage(difficulty: "easy" | "medium" | "hard") {
  const passageArray = passages[difficulty];
  const randomIndex = Math.floor(Math.random() < 0.5 ? Math.random() * passageArray.length : (Math.random() * passageArray.length) - 1);
  return passageArray[randomIndex];
}


