import { StatusBar } from "expo-status-bar"
import React from "react"

import { Footer, Container, Content, Subtitle, Title } from "./styles"

import LogoBackground from "../../assets/logo_background_gray.svg"
import Done from "../../assets/done.svg"

import { useWindowDimensions } from "react-native"
import { ConfirmButton } from "../../../components/ConfirmButton"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"

export const StepsComplete = () => {
  const { width } = useWindowDimensions()

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const handleHome = () => {
    navigate("Home")
  }
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LogoBackground width={width} />

      <Content>
        <Done width={80} height={80} />
        <Title>Conta criada!</Title>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>
    </Container>
  )
}
