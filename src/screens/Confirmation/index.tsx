import { StatusBar } from "expo-status-bar"
import React from "react"

import { Footer, Container, Content, Subtitle, Title } from "./styles"

import LogoBackground from "../../assets/logo_background_gray.svg"
import Done from "../../assets/done.svg"

import { useWindowDimensions } from "react-native"
import { ConfirmButton } from "../../components/ConfirmButton"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"

interface Props {
  title: string
  message: string
  nextScreenRoute: string
}

export const Confirmation = ({ title, message, nextScreenRoute }: Props) => {
  const { width } = useWindowDimensions()

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const handleHome = () => {
    navigate(nextScreenRoute)
  }
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LogoBackground width={width} />

      <Content>
        <Done width={80} height={80} />
        <Title>{title}</Title>
        <Subtitle>{message}</Subtitle>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>
    </Container>
  )
}
