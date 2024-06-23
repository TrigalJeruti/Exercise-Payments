import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useSession from '../hooks/useSession'

const Login = () => {
  const [failedLogin, setFailedLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useSession()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  // Fetch and save token
  const fetchToken = async () => {
    setLoading(true)

    if (user === 'encuadrado' && password === 'enc123**456&789') {
      login({password, user})
    } else {
      setFailedLogin(true)
      setUser('')
      setPassword('')
      setLoading(false)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    fetchToken()
    navigate('/')
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#ECECF3]">
      <div className="">
        {loading ? (
          <span>Loader</span>
        ) : (
          <form className="">
            {failedLogin && (
              <div className="h-8 text-slate-400 text-sm">
                Credenciales incorrectas, intenta nuevamente.
              </div>
            )}

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
              dark:focus:border-blue-500 mb-3"
              placeholder="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <div className="">
              <input
                type={showPassword ? 'text' : 'password'}
                style={{}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className=""
                onClick={() => setShowPassword(!showPassword)}
              >
              </button>
            </div>

            <button
              type="submit"
              className="w-[24rem] bg-[#4D4EB0] rounded-lg text-white py-1"
              onClick={handleClick}
            >
              Ingresar
            </button>

          </form>
        )}
      </div>
    </div>
  )
}

export default Login
