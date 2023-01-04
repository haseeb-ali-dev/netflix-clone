import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYj88Lvtcs7o0upysGAyCCOwQhG3RukTQ",
  authDomain: "netflix-xlone-dd7a2.firebaseapp.com",
  projectId: "netflix-xlone-dd7a2",
  storageBucket: "netflix-xlone-dd7a2.appspot.com",
  messagingSenderId: "69836845252",
  appId: "1:69836845252:web:be1ad436d061f6d918d991"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }