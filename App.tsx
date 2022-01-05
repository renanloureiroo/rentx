import React from "react"

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

import AppLoading from "expo-app-loading"
import { ThemeProvider } from "styled-components/native"
import theme from "./src/global/styles/theme"
import { CardDetails } from "./src/screens/CardDetails"
import { GestureHandlerRootView } from "react-native-gesture-handler"

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
          <CardDetails />
        </GestureHandlerRootView>
      </ThemeProvider>
    )
  }
}
