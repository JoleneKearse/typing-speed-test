import OptionButtons from "./OptionsButtons";

const SettingsLargeScreens = () => {
  return (
    <section className="flex gap-16 items-center">
      <div className="flex items-center gap-2">
        <p className="text-preset-5 text-neutral-400 pl-4 pr-2 pb-4">
          Difficulty:
        </p>
        <OptionButtons text="Easy" id="easy-button" color="neutral-100" />
        <OptionButtons text="Medium" id="medium-button" color="neutral-100" />
        <OptionButtons text="Hard" id="hard-button" color="neutral-100" />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-preset-5 text-neutral-400 pl-4 pr-4 pb-4">
          Mode:
        </p>
        <OptionButtons text="Timed(60s)" id="timed-mode" color="neutral-100" />
        <OptionButtons text="Passage" id="passage-mode" color="neutral-100" />
      </div>
    </section>
  );
};

export default SettingsLargeScreens;
