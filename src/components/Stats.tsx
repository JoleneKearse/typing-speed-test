const Stats = () => {
  return (
    <section className="grid grid-cols-3 md:flex md:justify-between  md:w-3/4 lg:w-2/5">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <p className="text-preset-3-mobile md:text-preset-3 text-neutral-400">
          WPM:
        </p>
        <p
          className="text-preset-2 font-semibold text-neutral-100"
          id="wpm-display"
        >
          0
        </p>
      </div>
      <div className="flex flex-col items-center gap-2  border-l border-r border-neutral-700 md:flex-row md:pl-800 md:pr-800 lg:pl-400 lg:pr-400">
        <p className="text-preset-3-mobile md:text-preset-3 text-neutral-400">
          Accuracy:
        </p>
        <p
          className="text-preset-2 font-semibold text-neutral-100"
          id="accuracy-display"
        >
          100%
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:pl-600">
        <p className="text-preset-3-mobile md:text-preset-3 text-neutral-400">
          Time:
        </p>
        <p
          className="text-preset-2 font-semibold text-neutral-100"
          id="time-display"
        >
          0:60
        </p>
      </div>
    </section>
  );
};

export default Stats;
