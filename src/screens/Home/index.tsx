import { StatusBar } from "expo-status-bar"
import React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Logo from "../../assets/logo.svg"

import { Container, Header, TotalCars, ContentHeader } from "./styles"

export const Home = () => {
  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <ContentHeader>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de carros 12</TotalCars>
        </ContentHeader>
      </Header>
    </Container>
  )
}
