import { createTheme } from '@mui/material/styles'

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b7197'
    },
    secondary: {
      main: '#e76e3c'
    },
    background: {
      default: '#b7b7b7',
      paper: '#ececec'
    },
    info: {
      main: '#2196f3'
    }
  },
  typography: {
    h1: {
      fontFamily: ' "Helvetica", "Arial", sans-serif'
    },
    fontFamily: 'Lora'
  },
  shape: {
    borderRadius: 6
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none'
          }
        }
      },
      thumb: {
        width: 24,
        height: 24
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      }
    }
  }
})
