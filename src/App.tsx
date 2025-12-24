// import { useState } from 'react'

import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import TypingTestArea from "./components/TypingTestArea";

function App() {
  console.log("Width:", window.innerWidth);
  console.log("Height:", window.innerHeight);
  return (
    <div className="flex flex-col gap-6 p-200 mx-auto lg:px-1400 lg:py-400">
      <Header />
      <InfoBlock />
      <main className="border-t border-neutral-700">
        <TypingTestArea />
      </main>
    </div>
  );
}

export default App;
