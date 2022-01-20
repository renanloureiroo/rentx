import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Confirmation } from "../screens/Confirmation"

import { Splash } from "../screens/Splash"
import { SignIn } from "../screens/SignIn"
import { FirstStep } from "../screens/SingUp/FirstStep"
import { SecondStep } from "../screens/SingUp/SecondStep"

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  )
}
