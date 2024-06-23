import { useContext } from 'react'

import { AuthContext } from '../context/AuthContextWrapper'

const useSession = () => {
  const { setAuth } = useContext(AuthContext)

  const login = (data) => {
    localStorage.setItem('user', data.user)
    setAuth(true)
  }
  const logout = () => {
    setAuth(false)
    localStorage.clear()
  }

  return { login, logout }
}

export default useSession