import React, { ReactNode } from "react"

import { AuthContextProvider } from "./Auth"

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
