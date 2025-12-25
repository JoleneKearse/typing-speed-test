import { SettingsProvider } from "./context/SettingsContext";
import { TypingProvider } from "./context/TypingContext";

import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import TypingTestBlock from "./components/TypingTestBlock";

function App() {
  // TODO: Use for extension challenge to keep track of typing speeds on various devices
  console.log("Width:", window.innerWidth);
  console.log("Height:", window.innerHeight);

  return (
    <div className="flex flex-col gap-6 p-200 mx-auto lg:px-1400 lg:py-400">
      <SettingsProvider>
        <Header />
        <TypingProvider>
          <InfoBlock />
          <main className="border-t border-b py-300 border-neutral-700">
            <TypingTestBlock />
          </main>
        </TypingProvider>
      </SettingsProvider>
    </div>
  );
}

export default App;
