import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { AppStackRoutes } from "./app.stack.routes"
import { Home } from "../screens/Home"
import { MyCars } from "../screens/MyCars"

const { Navigator, Screen } = createBottomTabNavigator()

export const AppTabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeStack"
    >
      <Screen name="HomeStack" component={AppStackRoutes} />
      <Screen name="Profile" component={AppStackRoutes} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  )
}
