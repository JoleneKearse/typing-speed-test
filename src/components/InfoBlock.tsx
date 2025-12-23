import Stats from "./Stats";
import SettingsMobile from "./SettingsMobile";
import SettingsLargeScreens from "./SettingsLargeScreens";


const InfoBlock = () => {
  return (
    <section className="flex flex-col gap-6 w-full outline outline-pink-500">
      <Stats />
      {window.innerWidth < 600 ? <SettingsMobile /> : <SettingsLargeScreens />}
    </section>
  );
};

export default InfoBlock;
