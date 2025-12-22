const Header = () => {
    return ( 
        <header className="flex justify-between items-center p-200">
            <img src={window.innerWidth < 600 ? "./src/assets/images/logo-small.svg" : "./src/assets/images/logo-large.svg"} alt="logo" />
            <div className="flex gap-2 items-center">
                <img src="./src/assets/images/icon-personal-best.svg" alt="golden trophy" />
                <p className="text-preset-4 text-neutral-400">{window.innerWidth < 600 ? "Best:" : "Personal best:"}</p>
                <p className="text-preset-4 text-neutral-100">0 WPM</p>
            </div>
        </header>
     );
}
 
export default Header;