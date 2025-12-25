import { Button } from "./ui/button";

const TypingTestOverlay = () => {
  return (
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
  );
};

export default TypingTestOverlay;
