import { StatusBar } from "expo-status-bar"
import React from "react"

import { ButtonContainer, Container, Content, Subtitle, Title } from "./styles"

import LogoBackground from "../../assets/logo_background_gray.svg"
import Done from "../../assets/done.svg"
import { RFValue } from "react-native-responsive-fontsize"

import { useWindowDimensions } from "react-native"
import { ConfirmButton } from "../../components/ConfirmButton"

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions()
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LogoBackground width={width} />

      <Content>
        <Done width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Subtitle>
          Agora você só precisa ir{"\n"}até a concessionária da RENTX{"\n"}pegar
          o seu automóvel.
        </Subtitle>
      </Content>

      <ButtonContainer>
        <ConfirmButton />
      </ButtonContainer>
    </Container>
  )
}
