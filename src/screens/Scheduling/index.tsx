import { StatusBar } from "expo-status-bar"
import React from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import { Container, Header, Title, ButtonContainer } from "./styles"

export const Scheduling = () => {
  const theme = useTheme()
  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <ButtonContainer>
          <BackButton color={theme.colors.background_secondary} />
        </ButtonContainer>

        <Title>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </Title>
      </Header>
    </Container>
  )
}
