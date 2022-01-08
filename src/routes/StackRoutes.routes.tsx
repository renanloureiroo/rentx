import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { CardDetails } from "../screens/CardDetails"
import { Scheduling } from "../screens/Scheduling"
import { SchedulingDetails } from "../screens/SchedulingDetails"
import { SchedulingComplete } from "../screens/SchedulingComplete"

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="CardDetails" component={CardDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  )
}
