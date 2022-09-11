/* eslint-disable no-unused-vars */
import { blueGrey, grey, lightBlue, orange, cyan } from '@mui/material/colors'
import {
  createTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider
} from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { createContext, useMemo, useState } from 'react'

import { extendTheme as extendJoyTheme } from '@mui/joy/styles'
import { DarkTheme } from './DarkTheme'
import { LightTheme } from './LightTheme'
import { CssBaseline } from '@mui/material'
import { blueish, orangeB } from './ThemeColor'

// const muiTheme = LightTheme()
const muiTheme = extendMuiTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: blueish,
        secondary: blueGrey
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orangeB
      }
    }
  }
})
console.log('MUI', muiTheme)
const joyTheme = extendJoyTheme({
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        background: {
          ...blueGrey,
          level3: 'var(--mui-palette-grey-900)',
          default: 'var(--mui-palette-neutral-900)'
        },
        primary: {
          ...blueGrey,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)'
        },
        neutral: {
          ...grey
        },
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(255 255 255 )'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          ...blueGrey,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)'
        },
        neutral: {
          ...grey
        },
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(255 255 255 )'
        }
      }
    }
  },
  fontFamily: {
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif'
  },
  shadow: {
    xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
    sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
    md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
    lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
    xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`
  }
})

// const theme = deepmerge(joyTheme, muiTheme)
console.log('JOY', joyTheme)

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ColorProvider = ({ children }) => {
  const [mounted, setMounted] = useState('true')
  const [modeMUI, setModeMUI] = useState(localStorage.getItem('mui-mode') || 'light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log(modeMUI)

        setModeMUI((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
      }
    }),
    [modeMUI]
  )

  // const colorTheme = useMemo(() => (mounted === 'true' ? 'false' : 'true'), [mounted])
  const themeMUI = useMemo(() => createTheme(modeMUI === 'light' ? LightTheme : DarkTheme), [modeMUI])
  let finalTheme = createTheme(deepmerge(deepmerge(joyTheme, muiTheme), themeMUI))
  finalTheme = responsiveFontSizes(finalTheme)
  // console.log(createTheme(deepmerge(deepmerge(joyTheme, muiTheme), themeMUI)), 'new')
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeMUI}>
        <CssVarsProvider
          theme={finalTheme}
          // colorSchemeStorageKey='custom-joy-theme'
        >
          {children}
        </CssVarsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

/**
 * export const ColorModeContext = createContext({ toggleColorMode: () => {} })
 export const ColorProvider = ({ children }) => {
  const [mode, setMode] = useState('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
        localStorage.setItem('theme', mode)
      }
    }),
    [mode]
  )
  const themeMUI = useMemo(() => createTheme(mode === 'light' ? LightTheme : DarkTheme), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

NavBar
 const { palette } = useTheme()
  const colorMode = useContext(ColorModeContext)
<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
                  {palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
 * */
