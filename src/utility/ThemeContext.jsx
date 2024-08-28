import React, { createContext, useState } from 'react';

export let Theme = createContext();

const ThemeContext = ({children}) => {
    let [theme ,setTheme] = useState(localStorage.getItem("Theme"));
  return (
    <Theme.Provider value={{theme,setTheme}}>
        {children}
    </Theme.Provider>
  )
}

export default ThemeContext
