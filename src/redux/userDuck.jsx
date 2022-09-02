/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { auth, provider, timestampNow, db } from 'src/firebase/config'
import axios from 'axios'
import { useEffect } from 'react'
import { useFetch } from 'src/Hooks/useFetch'
import { Loading } from 'src/component/Loading/Loading'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
// ----------------------------------------------------------------------

// Initial Data
const initialState = {
  loading: false,
  isSignedIn: false,
  userData: null,
  searchInput: 'tech',
  blogData: null
}
// ----------------------------------------------------------------------

// Types
const LOADING = 'LOADING'
const USER_ERROR = 'USER_ERROR'
const USER_REGISTER = 'USER_REGISTER'
const USER_OUT = 'USER_OUT'
const SEARCH_INPUT = 'SEARCH_INPUT'
const BLOG_DATA = 'BLOG_DATA'
// ----------------------------------------------------------------------

// Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT:
      return { ...state, searchInput: action.payload.searchInput, blogData: action.payload.blog }
    case BLOG_DATA:
      return { ...state, blogData: action.payload }
    case LOADING:
      return { ...state, loading: true }
    case USER_ERROR:
      return { ...initialState }
    case USER_REGISTER:
      return { ...state, loading: false, userData: action.payload, isSignedIn: true }
    case USER_OUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}
// ----------------------------------------------------------------------

// Actions. Actions are going to be import to the Component/Page I need to call the action and call it with dispatch

/** Firebase */

/**  Register( Sign in with google)
 * Reading user (sending info to local storage)
 * Sign Up with email
 * Sign Out
 */

/** Sign in with google*/

export const registerUserAction = () => async (dispatch) => {
  // Creating this dispatch in case the user is already registered or no
  dispatch({ type: LOADING })
  try {
    const res = await signInWithPopup(auth, provider)
    const user = res.user

    const formDataCopy = {
      online: true,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      timestamp: timestampNow
    }

    await setDoc(doc(db, 'users', user.uid), formDataCopy)

    dispatch({
      type: USER_REGISTER,
      payload: {
        uid: res.user.uid,
        email: res.user.email,
        name: res.user.displayName,
        picture: res.user.photoURL
      }
    })
    localStorage.setItem(
      'user',
      JSON.stringify({
        uid: res.user.uid,
        email: res.user.email,
        name: res.user.displayName,
        picture: res.user.photoURL
      })
    )
  } catch (err) {
    console.log(err)
    // Dispatch in case of any error happens
    dispatch({ type: USER_ERROR })
  }
}
export const readUserActiveAction = () => (dispatch) => {
  if (localStorage.getItem('user')) {
    dispatch({
      type: USER_REGISTER,
      payload: JSON.parse(localStorage.getItem('user'))
    })
  }
}

/** Sign Up with email*/

export const registerEmail = (email, password, displayName) => async (dispatch) => {
  dispatch({ type: LOADING })

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
    // setIsLoading(false)
    alert(`Welcome ${displayName}!`)

    console.log('User created successfully')
  } catch (error) {
    console.log(error.message)
    // setIsLoading(false)
  }
}

/** Login  with email*/
export const loginUserFB = (email, password) => async (dispatch) => {
  // setIsLoading(true)

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const docRef = doc(db, 'users', userCredential.user.uid)
    await updateDoc(docRef, {
      online: true
    })
    // setIsLoading(false)
    // toast.success(`Welcome back ${userCredential.user.displayName}!`)
  } catch (error) {
    console.log(error)
    // errorsFirebase(error.code)
    // setIsLoading(false)
  }
}

export const signOutAction = () => (dispatch) => {
  signOut(auth)
  localStorage.removeItem('user')
  dispatch({ type: USER_OUT })
}

export const searchInputUser = (action) => async (dispatch) => {
  try {
    const blog_url = `https://gnews.io/api/v4/search?q=${action}&token=5b690c9a6983114519ab5e366c864743&max=9&lang=en`
    const response = await axios.get(blog_url)

    dispatch({ type: SEARCH_INPUT, payload: { blog: response.data, searchInput: action } })
  } catch (error) {
    console.log(error)
  }
}
export const blogData = () => async (dispatch, getState) => {
  if (localStorage.getItem('searchInput')) {
    dispatch({
      type: BLOG_DATA,
      payload: JSON.parse(localStorage.getItem('searchInput')) // I'm making JSON a easy way to read after use stringify
    })
    return
  }

  try {
    const { searchInput } = getState().user
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=5b690c9a6983114519ab5e366c864743&lang=en`

    const response = await axios.get(blog_url)
    console.log(response)
    dispatch({ type: BLOG_DATA, payload: response.data })
    localStorage.setItem('searchInput', JSON.stringify(response.data))
  } catch (error) {
    console.log(error)
  }
}
