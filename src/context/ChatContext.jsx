import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth, provider } from 'src/firebase/config'
export const ChatContext = createContext()
const ChatProvider = ({ children }) => {
  const dataUser = { uid: null, email: null, status: null }
  const [user, setUser] = useState(dataUser)

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email, status: true })
      } else {
        setUser({ uid: null, email: null, status: false })
      }
    })
  }

  const signInUserGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }
  const logOLut = () => {
    signOut(auth)
  }

  const value = { user, signInUserGoogle, logOLut }
  return <ChatContext.Provider value={{ value }}>{children}</ChatContext.Provider>
}
// ADD ChatPROVIDER TO THE APP
// TO USE IT IN ANY COMPONENT OR PAGE USE THIS:
// const { VARIABLES_YOU_NEED } = useContext(ChatContext);
export default ChatProvider
