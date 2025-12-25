import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import passages from "../../data.json";

import type { Difficulty } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomPassage(difficulty: Difficulty): number {
  const passageArray = passages[difficulty];
  const randomIndex = Math.floor(Math.random() < 0.5 ? Math.random() * passageArray.length : (Math.random() * passageArray.length) - 1);
  return randomIndex;
}


