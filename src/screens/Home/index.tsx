import { StatusBar } from "expo-status-bar"
import React from "react"
import Logo from "../../assets/logo.svg"

import { Container, Header, Title } from "./styles"

export const Home = () => {
  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <Logo />
        <Title>Total de carros 12</Title>
      </Header>
    </Container>
  )
}
