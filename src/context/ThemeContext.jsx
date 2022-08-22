import { createTheme, ThemeProvider } from '@mui/material/styles'
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import { createContext, useMemo, useState } from 'react'
import { LightTheme } from './LightTheme'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ColorProvider = ({ children }) => {
  const [mode, setMode] = useState('light')
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

  const theme = useMemo(() => createTheme(mode === 'light' ? LightTheme : 'light'), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SendbirdProvider theme={mode}>{children} </SendbirdProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
