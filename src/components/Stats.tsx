const Stats = () => {
  return (
    <section className="flex justify-between items-center gap-12">
      <div className="flex flex-col items-center gap-2 p-200">
        <p className="text-preset-3-mobile md:text-preset-3 text-neutral-400">
          WPM:
        </p>
        <p className="text-preset-2 font-semibold text-neutral-100" id="wpm-display">0</p>
      </div>
      <div className="flex flex-col items-center gap-2 p-200 border-l border-r border-neutral-700 pl-500 pr-500">
        <p className="text-preset-3-mobile md:text-preset-3 text-neutral-400">
          Accuracy:
        </p>
        <p className="text-preset-2 font-semibold text-neutral-100" id="accuracy-display">100%</p>
      </div>
      <div className="flex flex-col items-center gap-2 p-200">
        <p className="text-preset-3-mobile md:text-preset-3 text-neutral-400">
          Time:
        </p>
        <p className="text-preset-2 font-semibold text-neutral-100" id="time-display">0:60</p>
      </div>
    </section>
  );
};

export default Stats;
