import { signInWithPopup, signOut } from 'firebase/auth'
import { collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore'
import { createContext, useEffect, useState } from 'react'
import { auth, db, provider } from 'src/firebase/config'
export const ChatContext = createContext()
const ChatProvider = ({ children }) => {
  const dataUser = { uid: null, email: null, status: null }
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(dataUser)
  const [message, setMessage] = useState([])

  // useEffect(() => {
  //   checkUserStatus()
  // }, [])

  // const checkUserStatus = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser({ uid: user.uid, email: user.email, status: true })
  //       fetchMessage()
  //     } else {
  //       setUser({ uid: null, email: null, status: false })
  //     }
  //   })
  // }

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
  const fetchMessage = (collectionName = 'chat') => {
    // Fetching Data
    useEffect(() => {
      try {
        const q = query(collection(db, collectionName))
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          if (querySnapshot.empty) {
            console.error('No users to load')
          } else {
            const results = []
            querySnapshot.forEach((doc) => {
              results.push({ id: doc.id, ...doc.data() })
            })
            setMessage(results)
          }
        })
      } catch (err) {
        console.log(err.message)
      }
    }, [collectionName])

    return message
  }

  const addMessage = async (uidChat, textInput) => {
    const formDataCopy = {
      date: Date.now(),
      text: textInput,
      uid: uidChat
    }
    try {
      await setDoc(doc(db, 'chat', uidChat), formDataCopy)
    } catch (error) {
      console.log(error)
    }
  }

  const value = { user, signInUserGoogle, logOLut, fetchMessage, addMessage }
  return <ChatContext.Provider value={{ value }}>{children}</ChatContext.Provider>
}
// ADD ChatPROVIDER TO THE APP
// TO USE IT IN ANY COMPONENT OR PAGE USE THIS:
// const { VARIABLES_YOU_NEED } = useContext(ChatContext);
export default ChatProvider
