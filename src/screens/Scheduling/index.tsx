import { StatusBar } from "expo-status-bar"
import React from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import {
  Container,
  Header,
  Title,
  ButtonContainer,
  RentPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles"

import Arrow from "../../assets/arrow.svg"
import { Button } from "../../components/Button"
import { Calendar } from "../../components/Calendar"

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

        <RentPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
          <Arrow />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  )
}
