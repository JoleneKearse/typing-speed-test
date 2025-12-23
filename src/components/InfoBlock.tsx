import Stats from "./Stats";
import SettingsMobile from "./SettingsMobile";
import SettingsLargeScreens from "./SettingsLargeScreens";


const InfoBlock = () => {
  return (
    <section className="flex flex-col gap-6 w-full">
      <Stats />
      {window.innerWidth < 600 ? <SettingsMobile /> : <SettingsLargeScreens />}
    </section>
  );
};

export default InfoBlock;
