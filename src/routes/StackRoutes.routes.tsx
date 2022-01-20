import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { CarDetails } from "../screens/CarDetails"
import { Scheduling } from "../screens/Scheduling"
import { SchedulingDetails } from "../screens/SchedulingDetails"
import { Confirmation } from "../screens/Confirmation"
import { MyCars } from "../screens/MyCars"
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
      initialRouteName="Home"
    >
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="SignIn" component={SignIn} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  )
}
