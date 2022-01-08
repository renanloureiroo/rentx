import React from "react"

import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ThemeProvider } from "styled-components/native"
import AppLoading from "expo-app-loading"

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo"
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter"

import theme from "./src/global/styles/theme"

import { Scheduling } from "./src/screens/Scheduling"
import { SchedulingDetails } from "./src/screens/SchedulingDetails"
import { CardDetails } from "./src/screens/CardDetails"

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SchedulingDetails />
        </GestureHandlerRootView>
      </ThemeProvider>
    )
  }
}
