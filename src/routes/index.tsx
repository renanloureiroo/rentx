import React from "react"

import { NavigationContainer } from "@react-navigation/native"

import { AppTabRoutes } from "./app.tab.routes"
import { useAuth } from "../hooks/Auth"
import { AuthRoutes } from "./auth.routes"

export const Routes = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
