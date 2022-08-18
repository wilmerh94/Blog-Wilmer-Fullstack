import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  // const [state, dispatch] = React.useReducer(reducerFn, initialState, initFn);

  const [userAuth, setUserAuth] = useState({
    user: null,
    isLoading: false,
    authIsReady: false,
    isAdmin: false
  })

  const value = { userAuth, setUserAuth }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useTheme = () => useContext(AuthContext)
