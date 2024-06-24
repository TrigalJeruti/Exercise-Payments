import React, { useMemo, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'

export const AuthContext = React.createContext()

const AuthContextWrapper  = ({ children }) => {
  const [auth, setAuth] = useState(secureLocalStorage.getItem('user') !== null)
  const [userType, setUserType] = useState(null)

  const authState = useMemo(
    () => ({ auth, setAuth, userType, setUserType }),
    [auth, userType]
  )

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}

export default AuthContextWrapper
