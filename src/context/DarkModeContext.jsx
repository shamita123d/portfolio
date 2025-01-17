// // src/context/DarkModeContext.jsx
// import { createContext, useState, useContext } from 'react';

// const DarkModeContext = createContext();

// export function DarkModeProvider({ children }) {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// }

// export function useDarkMode() {
//   return useContext(DarkModeContext);
// }
