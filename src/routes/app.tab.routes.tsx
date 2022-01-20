import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { StackRoutes } from "./app.stack.routes"

const { Navigator, Screen } = createBottomTabNavigator()

export const AppTabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="HomeStack" component={StackRoutes} />
    </Navigator>
  )
}
