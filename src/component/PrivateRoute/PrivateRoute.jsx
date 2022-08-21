import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from 'src/firebase/config'
import { Loading } from '../Loading/Loading'
export const PrivateRoute = () => {
  const [firebaseUser, setFirebaseUser] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const fetchUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
        setCheckingStatus(false)
      })
    }
    fetchUser()
  }, [])
  if (checkingStatus) return <Loading />

  if (localStorage.getItem('user')) {
    const userStorage = JSON.parse(localStorage.getItem('user'))
    if (userStorage.uid === firebaseUser.uid) {
      return userStorage.uid === firebaseUser.uid ? <Outlet /> : <Navigate to='/login' />
    }
  }
}
