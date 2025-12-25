// TODO: When isTestRunning is true, focus on this textarea automatically

const TypingTestTextarea = () => {
    return ( 
        <textarea name="userTyping" id="userTyping" className="bg-purple-400 opacity-25 absolute top-0 left-0 w-full h-full text-preset-regular-mobile md:text-preset-regular text-neutral-900  focus:outline-none caret-transparent"></textarea>
     );
}
 
export default TypingTestTextarea;