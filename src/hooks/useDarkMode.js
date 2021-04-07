import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    const setDarkModeValue = value => {
        setDarkMode(value);
    }
    return [darkMode, setDarkModeValue];
}

export default useDarkMode;