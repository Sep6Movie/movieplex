import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import {  getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
  
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
      }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }

      function logout() {
          return auth.signOut()
      }

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    
        return unsubscribe
      }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
      }

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}

export async function upload(file, currentUser, setLoading) {
  const storage = getStorage();
  
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  auth.updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}

