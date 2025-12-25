// import { useEffect } from "react";

import { getRandomPassage } from "@/lib/utils";
import passages from "../../data.json";

import { useSettings } from "@/hooks/useSettings";

import { Button } from "./ui/button";

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
        className="text-preset-regular-mobile md:text-preset-regular text-neutral-400 pt-250 blur-sm"
        id="testingArea"
      >
        {shownPassage}
      </p>
      {/* TODO: Move to TypingTestAreaOverlay once state is set up. */}
      <section
        className="absolute flex flex-col justify-center items-center gap-4"
        id="overlayContent"
      >
        <Button
          className=" text-neutral-100 bg-blue-500 mb-50 hover:bg-blue-400 focus:outline-2 focus:outline-blue-500 focus:text-neutral-100"
          variant="secondary"
        >
          Start Typing Test
        </Button>
        <p className="text-neutral-100">Or click the text and start typing</p>
      </section>
    </article>
  );
};

export default TypingTestBlock;
