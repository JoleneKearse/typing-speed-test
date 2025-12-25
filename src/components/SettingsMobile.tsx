// import { useContext } from "react";

// import { SettingsContext } from "../context/SettingsContext";

import OptionDropdown from "./OptionDropdown";

const SettingsMobile = () => {
  // const { difficulty, mode, setDifficulty, setMode } =
  //   useContext(SettingsContext);

  return (
    <section className="flex justify-center gap-8">
      <OptionDropdown
        label="Hard"
        options={[
          { value: "easy", label: "Easy" },
          { value: "medium", label: "Medium" },
          { value: "hard", label: "Hard" },
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
