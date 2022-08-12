import { createContext } from 'react'
export const FirstContext = createContext('VARIABLES_YOU_NEED')
export const FirstProvider = ({ children }) => {
  return (
    <FirstContext.Provider
    //   value={ { 'VARIABLES_YOU_NEED' } }
    >
      {children}
    </FirstContext.Provider>
  )
}
