import Stats from "./Stats";
import Settings from "./Settings";

const Info = () => {
    return ( <section className="flex flex-col gap-6">
        <Stats />
        <Settings />
    </section> );
}
 
export default Info;