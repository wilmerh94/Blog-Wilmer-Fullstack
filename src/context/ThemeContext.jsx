import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext, useMemo, useState } from 'react'
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ColorProvider = ({ children }) => {
  const [mode, setMode] = useState('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        localStorage.setItem('theme', mode)
        console.log(mode)
      }
    }),
    [mode]
  )

  const theme1 = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme1}>{children} </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
