import React, { createContext, ReactNode, useState } from "react"
import api from "../../services/api"

interface User {
  name: string
  email: string
  driver_license: string
  avatar: string
}

interface AuthState {
  token: string
  user: User
}

interface SigInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  user: User
  signIn: (credential: SigInCredentials) => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [data, setData] = useState({} as AuthState)

  async function signIn({ email, password }: SigInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      })
      const { user, token } = response.data

      api.defaults.headers.common["Authorization"] = `Bearer ${token}}`
      setData({ user, token })
      console.log(response.data)
    } catch (err) {}
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
