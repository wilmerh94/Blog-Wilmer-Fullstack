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
  apiKey: 'AIzaSyAIEmCZv0qg8jX_Mt41tnw_Czm5y2FvtuU',
  authDomain: 'blog-will.firebaseapp.com',
  projectId: 'blog-will',
  storageBucket: 'blog-will.appspot.com',
  messagingSenderId: '219357780165',
  appId: '1:219357780165:web:50e5f2074464b5942478ac'
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
