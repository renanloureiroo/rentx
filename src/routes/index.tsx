import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { StackRoutes } from "./app.stack.routes"

import { AppTabRoutes } from "./app.tab.routes"

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  )
}
