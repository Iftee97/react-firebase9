import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDNTjEOduVsPatDbxvJXQ8Qovk78KZ-lgk",
  authDomain: "readinglistapp-d75c8.firebaseapp.com",
  projectId: "readinglistapp-d75c8",
  storageBucket: "readinglistapp-d75c8.appspot.com",
  messagingSenderId: "563008102277",
  appId: "1:563008102277:web:8a470e0ccaffcf0afdaeec"
}

// initialize firebase
initializeApp(firebaseConfig)

// initialise firestore database
const db = getFirestore()

// initialise authentication
const auth = getAuth()

export {
  db,
  auth
}
