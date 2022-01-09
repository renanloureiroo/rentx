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
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"

export const Scheduling = () => {
  const theme = useTheme()

  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  const handleSchedulingDetails = () => {
    navigate("SchedulingDetails")
  }
  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <ButtonContainer>
          <BackButton
            color={theme.colors.background_secondary}
            onPress={handleGoBack}
          />
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
        <Button title="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  )
}
