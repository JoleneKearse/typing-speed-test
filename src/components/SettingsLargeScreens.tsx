import { useSettings } from "@/hooks/useSettings";


import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const SettingsLargeScreens = () => {
  const { difficulty, mode, setDifficulty, setMode } =
    useSettings();

    console.log(difficulty, mode);

  return (
    <section className="flex gap-16 lg:gap-4 items-center text-neutral-100">
      <div className="flex items-center gap-2">
        <p className="text-preset-5 text-neutral-400 pr-2 lg:pr-0">
          Difficulty:
        </p>
        <ToggleGroup
          type="single"
          value={difficulty}
          onValueChange={setDifficulty}
          aria-label="Difficulty"
          variant="outline"
        >
          <ToggleGroupItem
            value="Easy"
            aria-label="Easy"
            className="data-[state=on]:text-blue-500 hover:text-blue-500 focus:outline-2 focus:outline-blue-500 focus:text-neutral-100"
          >
            Easy
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Medium"
            aria-label="Medium"
            className="data-[state=on]:text-blue-500 hover:text-blue-500 focus:outline-2 focus:outline-blue-500 focus:text-neutral-100"
          >
            Medium
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Hard"
            aria-label="Hard"
            className="data-[state=on]:text-blue-500 hover:text-blue-500 focus:outline-2 focus:outline-blue-500 focus:text-neutral-100"
          >
            Hard
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="text-3xl font-extralight text-neutral-800">|</div>
      <div className="flex items-center gap-2">
        <p className="text-preset-5 text-neutral-400 pl-4 lg:pl-0  pr-4">
          Mode:
        </p>
        <ToggleGroup
          type="single"
          value={mode}
          onValueChange={setMode}
          aria-label="Mode"
          variant="outline"
        >
          <ToggleGroupItem
            value="Timed(60s)"
            aria-label="Timed"
            className="data-[state=on]:text-blue-500 hover:text-blue-500 focus:outline-2 focus:outline-blue-500 focus:text-neutral-100"
          >
            Timed(60s)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Passage"
            aria-label="Passage"
            className="data-[state=on]:text-blue-500 hover:text-blue-500 focus:outline-2 focus:outline-blue-500 focus:text-neutral-100"
          >
            Passage
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </section>
  );
};

export default SettingsLargeScreens;
