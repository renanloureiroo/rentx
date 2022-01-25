import React, { ReactNode } from "react"
import { ToastProvider } from "react-native-toast-notifications"

import { AuthContextProvider } from "./Auth"

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthContextProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthContextProvider>
  )
}
