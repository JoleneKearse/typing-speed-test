import { Button } from "./ui/button";

type OptionsButtonsProps = {
    text: string;
    id: string;
    color?: string;
}

const OptionsButtons = ({ text, id, color }: OptionsButtonsProps) => {
    return ( 
        <section>
            <Button variant="outline" className={`text-${color} hover:text-blue-400 active:text-blue-500 mb-4`} id={id}>{text}</Button>
        </section>
     );
}
 
export default OptionsButtons;