import { useContext } from 'react'
import secureLocalStorage from 'react-secure-storage'


import { AuthContext } from '../context/AuthContextWrapper'

const useSession = () => {
  const { setAuth, setUserType } = useContext(AuthContext)

  const login = (data) => {
    setUserType(data.userType)
    secureLocalStorage.setItem('user', data.user)
    setAuth(true)
  }
  const logout = () => {
    setAuth(false)
    localStorage.clear()
  }

  return { login, logout }
}

export default useSession