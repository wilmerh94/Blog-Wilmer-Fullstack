import { createTheme } from '@mui/material/styles'

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    // customColor: {
    //   light:,main:,dark:, contrastText,
    // },
    primary: {
      light: '#8FE3CF',
      main: '#256D85',
      dark: '#2B4865',
      contrastText: '#fff'
      // secondary: 'rgba(59, 113, 151, 0.22)'
    },
    secondary: {
      main: '#e76e3c'
    },
    background: {
      default: 'rgba(0, 10, 10)',
      paper: 'rgba(3, 37, 76,0.95)'
    },
    text: {
      primary: 'rgb(237, 165, 76)',
      secondary: 'rgba(255, 255, 255, 0.9)'
    },
    info: {
      main: '#2196f3'
    }
  },
  typography: {
    fontFamily: 'Playfair Display',
    h1: {
      fontFamily: '"Playfair Display","Helvetica", "Arial", sans-serif'
    }
  },
  shape: {
    borderRadius: 6
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
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
          // backgroundColor: '#fafafa',
          opacity: 1
          // transition:
          //   'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#ececec'
          },
          '& label.Mui-focused': {
            color: '#ececec'
          },
          '& .MuiOutlinedInput-root': {
            input: { color: '#ececec' },
            '& fieldset': {
              borderColor: '#ececec'
            },
            '&:hover fieldset': {
              borderColor: '#ececec',
              borderWidth: '0.15rem'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ececec'
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#ececec'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ececec',
          textShadow: '0 6px 20px -3px rgba(0,0,0,0.3)'
        },
        'MuiTypography-caption': { color: '#ececec' }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#ececec'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        '& .MuiFab': {
          root: {
            backgroundColor: '#3b7197'
          }
        }
      }
    }
  }
})

// const Colors = {
//   common: '#333333'
//   primary: '#60CAAD'
//   secondary: '#E9E9E9'
//   error: '#9DA5A0'
//   warning
//   info
//   success
//   grey

//   danger
//   dark
//   light
//   muted
//   border
//   inverse
//   shaft
//   dove_gray
//   body_bg
//   // ----------------------------------------------------------------
//   // Solid Color
//   // ----------------------------------------------------------------
// white
// black
// }
