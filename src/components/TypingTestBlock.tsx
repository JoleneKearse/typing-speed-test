// import { useEffect } from "react";

import { getRandomPassage } from "@/lib/utils";
import passages from "../../data.json";

import { useSettings } from "@/hooks/useSettings";
import TypingTestOverlay from "./TypingTestOverlay";



const TypingTestBlock = () => {
  const { difficulty } = useSettings();
  const shownPassage = passages[difficulty][getRandomPassage(difficulty)].text;

  const handleClick = () => {
    const testingArea = document.getElementById(
      "testingArea"
    ) as HTMLTextAreaElement;
    const overlayContent = document.getElementById(
      "overlayContent"
    ) as HTMLDivElement;
    if (testingArea) {
      testingArea.classList.remove("blur-sm");
      overlayContent.style.display = "none";
    }
  };

  // useEffect(() => {
  //   shownPassage = passages[difficulty][getRandomPassage(difficulty)].text;
  // }, [difficulty]);

  return (
    <article
      className="relative flex flex-col justify-center items-center text-preset-3-semibold"
      id="typingInput"
      onClick={handleClick}
    >
      <p
        className="text-preset-regular-mobile md:text-preset-regular text-neutral-400 blur-sm"
        id="testingArea"
      >
        {shownPassage}
      </p>
      <TypingTestOverlay />
    </article>
  );
};

export default TypingTestBlock;
