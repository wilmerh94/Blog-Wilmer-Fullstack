import { createTheme } from '@mui/material/styles'

export const DarkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0C2D48'
    },
    secondary: {
      main: '#e76e3c'
    },
    background: {
      paper: '#0C2D48',
      default: '#145DA0'
    },
    text: {
      primary: '#0C2D48'
    },
    info: {
      main: '#2196f3'
    },
    action: {
      hover: '#2196f3',
      focus: '#2196f3'
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
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          color: 'orange', // input color focus of not
          backgroundColor: 'orange', // background color of whole input
          '&:hover:not($disabled):after': {
            backgroundColor: 'orange' // its when its hover and input is focused
          },
          '&:hover:not($disabled):before': {
            backgroundColor: 'orange' // its when you hover and input is not focused
          },
          '&:after': {
            backgroundColor: 'orange' // when input is focused, Its just for example. Its better to set this one using primary color
          },
          '&:before': {
            backgroundColor: 'orange' // when input is not touched
          }
        }
      }
    },
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
          border: '1px solid #0C2D48',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        }
      }
    }
  }
})
