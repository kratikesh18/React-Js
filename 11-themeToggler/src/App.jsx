import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardUI from "./Components/CardUI";
import ThemeButton from "./Components/ThemeButton";
import { ThemeProvider } from "./Contexts/Theme";

function App() {//initializing the values and the functions
  // we need te state to store the theme 
  const [themeMode, setThemeMode] = useState('light')

  // for darkthemeMode 
  const darkThemeMode = ()=>{
    setThemeMode("dark")
  }
  const lightThemeMode = ()=>{
    setThemeMode("light")
  }

  // we have to use them as well whenever the themMode Changes then the classes inside the html also change so we change it 

  useEffect(()=>{
    // removing any applied class theme
    document.querySelector('html').classList.remove('light', 'dark')
    // adding which is in the theme state for now 
    document.querySelector('html').classList.add(themeMode);

  },[themeMode])


  return (
    // WRAPPING UP THE APP TO  THE CONTEXT (THEMECONTEXT)
                //to define which values are accecible them we pass them to the values
                 //if there is the object then we also should have to pass the object here 
    <ThemeProvider   value={{themeMode, darkThemeMode, lightThemeMode}}>
                            {/* those ufnction have no use till now not defination as well refer L-10 */}
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <CardUI/></div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
