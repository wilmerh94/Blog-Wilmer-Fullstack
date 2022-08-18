// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, Timestamp } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Authentication
const auth = getAuth(app)

// Google Provider to Register User

const provider = new GoogleAuthProvider()

// Firestore Database
const db = getFirestore(app)

// Storage (IMG)
const storage = getStorage(app)

// TimeStamp
const timestampNow = Timestamp.fromDate(new Date())
const timestamp = formatDistanceToNow(timestampNow.toDate(), {
  addSuffix: true
})

export { db, auth, storage, timestampNow, timestamp, provider }
