import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch, 
  SetStateAction
} from 'react'
import css from 'styled-jsx'

interface ThemeInterface {
  theme: string,

  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeInterface>(null)

export function ThemeContextWrapper({
  children
}) {
  const [theme, setActiveTheme] = useState<string>('light')

  function lightTheme() {
    return (
      <style jsx global>{`
        body {
          background-color: #FAFAFA;

          --header-color: #FFF;
          --text-color: #333;
          --card-color: #e9e9e9;
          --button-color: rgb(61, 61, 61);
        }
      `}</style>
    )
  }

  function darkTheme() {
    return (
      <style jsx global>{`
        body {
          background-color: #333;

          --header-color: rgb(33,33,34);
          --text-color: #FFF;
          --card-color: rgb(61, 61, 61);
          --button-color: #e9e9e9;
        }
      `}</style>
    )
  }
  
  function style() {
    if (theme === 'light') {
      return lightTheme()
    } else {
      return darkTheme()
    }
  }

  useEffect(() => {
    if (!!localStorage) {
      const actualTheme = localStorage.getItem('theme')
      
      setActiveTheme('actualTheme')
    }
  }, [ ])

  function setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme)
    
    setActiveTheme(theme)
  }
  
  return (
    <ThemeContext.Provider
      value={{
        theme,

        setTheme
      }}
    >
      { style() }
      { children }
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}
