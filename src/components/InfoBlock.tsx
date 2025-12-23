import Stats from "./Stats";
import SettingsMobile from "./SettingsMobile";
import SettingsLargeScreens from "./SettingsLargeScreens";


const InfoBlock = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-56 w-full">
      <Stats />
      {window.innerWidth < 600 ? <SettingsMobile /> : <SettingsLargeScreens />}
    </section>
  );
};

export default InfoBlock;
