import AuthContext from './AuthContext'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useEffect, useState } from 'react'


const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
    })

    return () => unsubscribe();

  }, []);

  const logout = () => {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{user, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
