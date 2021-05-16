import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
}

console.log(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app