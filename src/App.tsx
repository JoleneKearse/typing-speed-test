// import { useState } from 'react'

import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";

function App() {
  return (
    <div className="flex flex-col gap-6 p-200 mx-auto lg:px-1400 lg:py-400">
      <Header />
      <InfoBlock />
    </div>
  );
}

export default App;
