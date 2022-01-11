import React from "react"
import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"

import { Feather } from "@expo/vector-icons"

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  CalendarIcon,
  PriceContainer,
  PriceTitle,
  PriceInfoContainer,
  PriceInfo,
  PriceTotal,
} from "./styles"

import Speed from "../../assets/speed.svg"
import Acceleration from "../../assets/acceleration.svg"
import Force from "../../assets/force.svg"
import Gasoline from "../../assets/gasoline.svg"
import Exchange from "../../assets/exchange.svg"
import People from "../../assets/people.svg"
import { Button } from "../../components/Button"
import { useTheme } from "styled-components"
import { RFValue } from "react-native-responsive-fontsize"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native"
import { CarDTO } from "../../dtos/CarDTO"

interface Params {
  car: CarDTO
}

export const SchedulingDetails = () => {
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()

  const { params } = useRoute()
  const { car } = params as Params

  const handleGoBack = () => {
    goBack()
  }

  const handleSchedulingComplete = () => {
    navigate("SchedulingComplete")
  }
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamburguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380km/h" icon={Speed} />
          <Accessory name="3.2s" icon={Acceleration} />
          <Accessory name="800 HP" icon={Force} />
          <Accessory name="Gasolina" icon={Gasoline} />
          <Accessory name="Auto" icon={Exchange} />
          <Accessory name="2 pessoas" icon={People} />
        </Accessories>

        <RentPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              color={theme.colors.background_secondary}
              size={RFValue(24)}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>08/01/2022</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            color={theme.colors.text}
            size={RFValue(20)}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>10/01/2022</DateValue>
          </DateInfo>
        </RentPeriod>

        <PriceContainer>
          <PriceInfoContainer>
            <PriceTitle>Total</PriceTitle>
            <PriceInfo>R$580 x 3 diárias</PriceInfo>
          </PriceInfoContainer>

          <PriceTotal>R$ 2900</PriceTotal>
        </PriceContainer>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleSchedulingComplete}
        />
      </Footer>
    </Container>
  )
}
