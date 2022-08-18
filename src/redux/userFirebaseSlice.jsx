import { createSlice } from '@reduxjs/toolkit'
// import { useEffect, useReducer } from 'react'
// import { useAuthStatus } from '../Hooks/useAuthStatus'
// import { useFetching } from '../Hooks/useCollection'

// import { db } from '../firebase/config'
// const { loggedIn, user } = useAuthStatus()
// const { listings, isLoading } = useFetching('users')

const userFirebaseSlice = createSlice({
  name: 'userFirebase',
  initialState: {
    userData: null,
    isSignedIn: false,
    authIsReady: false,
    isAdmin: false,
    searchInput: 'tech',
    blogData: null,
    isLoading: false
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload
    },
    setAuthIsReady: (state, action) => {
      state.authIsReady = action.payload
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload
    },
    setInput: (state, action) => {
      state.searchInput = action.payload
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
export const {
  setUserData,
  setSignedIn,
  setAuthIsReady,
  setIsAdmin,
  setInput,
  setBlogData,
  setIsLoading
} = userFirebaseSlice.actions

export const selectUserData = (state) => state.user.userData
export const selectSignedIn = (state) => state.user.isSignedIn
export const selectAuthIsReady = (state) => state.user.authIsReady
export const selectIsAdmin = (state) => state.user.isAdmin
export const selectUserInput = (state) => state.user.searchInput
export const selectBlogData = (state) => state.user.blogData
export const selectIsLoading = (state) => state.user.isLoading

export default userFirebaseSlice.reducer

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isLoading: false, authIsReady: true }
    case 'LOADING_USER':
      return { ...state, isLoading: true }
    case 'LOGOUT':
      return { ...state, user: null, isLoading: false }
    case 'AUTH_IS_READY':
      return {
        ...state,
        user: action.payload,
        authIsReady: true,
        isLoading: false,
        isAdmin: false
      }
    case 'ADMIN_IS_READY':
      return {
        ...state,
        user: action.payload,
        authIsReady: true,
        isLoading: false,
        isAdmin: true
      }
    default:
      return state
  }
}
