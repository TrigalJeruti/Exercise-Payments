import React, { useMemo, useState } from 'react'

export const AuthContext = React.createContext()

const AuthContextWrapper  = ({ children }) => {
  const [auth, setAuth] = useState(null)

  const authState = useMemo(
    () => ({ auth, setAuth }),
    [auth]
  )

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}

export default AuthContextWrapper
