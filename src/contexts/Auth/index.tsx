import React, { createContext, ReactNode, useEffect, useState } from "react"
import { database } from "../../database"
import api from "../../services/api"

import { User as ModelUser } from "../../database/model/User"

interface User {
  id: string
  user_id: string
  name: string
  email: string
  driver_license: string
  avatar: string
  token: string
}

interface SigInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  user: User
  signIn: (credential: SigInCredentials) => Promise<void>
  signOut: () => Promise<void>
  updateUser: (user: User) => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [data, setData] = useState<User>({} as User)

  async function signIn({ email, password }: SigInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      })
      const { user, token } = response.data

      api.defaults.headers.common = {
        Authorization: `bearer ${token}`,
      }

      setData({ ...user, token })

      await database.write(async () => {
        await database.get<ModelUser>("users").create((newUser) => {
          ;(newUser.user_id = user.id),
            (newUser.name = user.name),
            (newUser.email = user.email),
            (newUser.driver_license = user.driver_license),
            (newUser.avatar = user.avatar),
            (newUser.token = token)
        })
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async function signOut() {
    try {
      await database.write(async () => {
        const userSelected = await database
          .get<ModelUser>("users")
          .find(data.id)

        await userSelected.destroyPermanently()
        setData({} as User)
      })
    } catch (error) {}
  }

  async function updateUser(user: User) {
    try {
      await database.write(async () => {
        const userSelected = await database
          .get<ModelUser>("users")
          .find(user.id)
        await userSelected.update((userData) => {
          ;(userData.name = user.name),
            (userData.driver_license = user.driver_license),
            (userData.avatar = user.avatar)
        })
      })

      setData(user)
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const rehydrated = await database.get("users").query().fetch()
      if (rehydrated.length > 0) {
        const userData = rehydrated[0]._raw as unknown as User

        api.defaults.headers.common = {
          Authorization: `bearer ${userData.token}`,
        }
        setData(userData)
      }
    }
    loadUserData()
  }, [])
  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
