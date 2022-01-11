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
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"

interface Params {
  car: CarDTO
  dates: string[]
  period: {
    start: number
    startFormatted: string
    end: number
    endFormatted: string
  }
}

export const SchedulingDetails = () => {
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()

  const { params } = useRoute()
  const { car, dates, period } = params as Params
  const total = car.rent.price * dates.length

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
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((item) => (
            <Accessory
              key={item.type}
              name={item.name}
              icon={getAccessoryIcon(item.type)}
            />
          ))}
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
            <DateValue>{period.startFormatted}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            color={theme.colors.text}
            size={RFValue(20)}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{period.endFormatted}</DateValue>
          </DateInfo>
        </RentPeriod>

        <PriceContainer>
          <PriceInfoContainer>
            <PriceTitle>Total</PriceTitle>
            <PriceInfo>
              R${car.rent.price} x {dates.length} diárias
            </PriceInfo>
          </PriceInfoContainer>

          <PriceTotal>R$ {total}</PriceTotal>
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
