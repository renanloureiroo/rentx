import React from "react"
import "intl"
import "intl/locale-data/jsonp/pt-BR"

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

import { Routes } from "./src/routes"
import { AppProvider } from "./src/contexts"

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
          <AppProvider>
            <Routes />
          </AppProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    )
  }
}
