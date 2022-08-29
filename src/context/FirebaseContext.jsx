import { createContext, useContext, useEffect, useState } from 'react'

// Firebase Data API
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { collection, doc, onSnapshot, query, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db, timestampNow } from 'src/firebase/config'
import { errorsFirebase } from 'src/utils/errorsFirebase'
import { toast } from 'react-toastify'

const FirebaseContext = createContext()

export function FirebaseProvider({ children }) {
  //  I can use setUser and user to create Active or not with onClick in sign in and sign out. I started the user as false because It will be use in the main App.jsx as a If(). If user is false  It will give me a Loading message and then after get answer from Google API it will give me the data or null
  const [user, setUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [listings, setListings] = useState([])

  useEffect(() => {
    // This is an observable so It need to be disabled after I use it
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is Active')
        const { email, photoURL, displayName, uid } = user
        setUser({ email, photoURL, displayName, uid })
      } else {
        console.log('User is not Active')

        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  // SignUp user

  const registerFB = async (email, password, displayName) => {
    setIsLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      //  Getting uid
      const user = userCredential.user
      if (!userCredential) {
        console.error('Could not complete Sign Up')
      }

      // Updating profile
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: user.photoURL
      })
      const formDataCopy = {
        online: true,
        displayName,
        email,
        password,
        photoURL: user.photoURL,
        timestamp: timestampNow
      }

      //  Creating collection of Users
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      setIsLoading(false)
      alert(`Welcome ${displayName}!`)

      console.log('User created successfully')
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  const loginUserFB = async (email, password) => {
    setIsLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const docRef = doc(db, 'users', userCredential.user.uid)
      await updateDoc(docRef, {
        online: true
      })
      setIsLoading(false)
      toast.success(`Welcome back ${userCredential.user.displayName}!`)
    } catch (error) {
      console.log(error)
      errorsFirebase(error.code)
      setIsLoading(false)
    }
  }

  // Log out from firebase
  const signOutUserFB = async () => {
    setIsLoading(true)

    try {
      const { uid } = user
      const docRef = doc(db, 'users', uid)
      await updateDoc(docRef, {
        online: false
      })

      signOut(auth)
      setIsLoading(false)
      alert('Successfully signed out!')
    } catch (error) {
      console.log(error)
      errorsFirebase(error.code)

      setIsLoading(false)
    }
  }

  // Collection of users data
  const getUsers = (collectionName = 'users') => {
    setIsLoading(true)

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
            setListings(results)
            setIsLoading(false)
          }
        })
      } catch (err) {
        console.log(err.message)
        setIsLoading(false)
      }
    }, [collectionName])

    return listings
  }

  // Updating profile from firebase
  // const updateProfileFB = async (displayName = '', photoURL = '') => {
  //   return await updateProfile(auth.currentUser, {
  //     displayName,
  //     photoURL
  //   })
  // }

  const value = { user, setUser, isLoading, registerFB, loginUserFB, signOutUserFB, getUsers }
  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
}

export const useFirebase = () => useContext(FirebaseContext)
