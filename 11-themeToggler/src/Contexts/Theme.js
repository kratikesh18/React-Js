import {useContext , createContext} from 'react';

                //THIS IA THE CONTEXT WITH DEFAULT VALUES 
export const ThemeContext = createContext({
    themeMode : "light",
    darkThemeMode: ()=>{},
    lightThemeMode:()=>{}
})

// THIS IA THE CONTEXT PROVIDER
export const ThemeProvider = ThemeContext.Provider

// AND THIS IS THE CUSTOM HOOK TO USE THE THEME CONTEXT AND EXPORTING IT DEFAULT
export default function useTheme(){
    return useContext(ThemeContext)
}