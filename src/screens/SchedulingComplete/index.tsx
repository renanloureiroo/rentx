import { StatusBar } from "expo-status-bar"
import React from "react"

import {
  ButtonConfirm,
  ButtonTitle,
  Container,
  Content,
  Subtitle,
  Title,
} from "./styles"

import LogoBackground from "../../assets/logo_background_gray.svg"
import Done from "../../assets/done.svg"
import { RFValue } from "react-native-responsive-fontsize"

export const SchedulingComplete = () => {
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LogoBackground width={"100%"} height={RFValue(235)} />

      <Content>
        <Done width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Subtitle>
          Agora você só precisa ir{"\n"}até a concessionária da RENTX{"\n"}pegar
          o seu automóvel.
        </Subtitle>
      </Content>

      <ButtonConfirm>
        <ButtonTitle>OK</ButtonTitle>
      </ButtonConfirm>
    </Container>
  )
}
