import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/theme';
import Card from './Components/Card';
import ThemeBtn from './Components/ThemeButton';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector('html');

    // Remove both "light" and "dark" classes
    htmlElement.classList.remove("light", "dark");

    // Add the selected theme class
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
