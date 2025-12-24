import passages from "..//../data.json";

import { Button } from "./ui/button";

const TypingTestArea = () => {
  const handleClick = () => {
    const testingArea = document.getElementById(
      "testingAreaOverlay"
    ) as HTMLTextAreaElement;
    const overlayContent = document.getElementById(
      "overlayContent"
    ) as HTMLDivElement;
    if (testingArea) {
      testingArea.classList.remove("blur-sm");
      overlayContent.style.display = "none";
    }
  };

  return (
    <article
      className="relative flex flex-col justify-center items-center text-preset-3-semibold"
      id="typingInput"
      onClick={handleClick}
    >
      <p
        className="text-preset-regular-mobile md:text-preset-1 text-neutral-400 pt-250 blur-sm"
        id="testingAreaOverlay"
      >
        {passages.hard[9].text}
      </p>
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

export default TypingTestArea;
