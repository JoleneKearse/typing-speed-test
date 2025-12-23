import OptionDropdown from "./OptionDropdown";

const SettingsMobile = () => {
  return (
    <section className="flex justify-center gap-8">
      <OptionDropdown
        label="Hard"
        options={[
          { value: "Easy", label: "Easy" },
          { value: "Medium", label: "Medium" },
          { value: "Hard", label: "Hard" },
        ]}
      />
      <OptionDropdown
        label="Timed(60s)"
        options={[
          { value: "Timed(60s)", label: "Timed(60s)" },
          { value: "Passage", label: "Passage" },
        ]}
      />
    </section>
  );
};

export default SettingsMobile;
