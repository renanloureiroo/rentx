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
import { StatusBar } from "expo-status-bar"
import api from "../../services/api"
import { Alert } from "react-native"

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

  const handleSchedulingComplete = async () => {
    try {
      const schedulingByCar = await api.get(`/schedules_bycars/${car.id}`)
      console.log(schedulingByCar)

      const unavailable_dates = [
        ...schedulingByCar.data.unavailable_dates,
        ...dates,
      ]

      await api.post("/schedules_byuser", {
        user_id: 1,
        car: car,
        period: period,
      })

      const response = await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      if (response.status !== 200) {
        throw new Error("bad request")
      }
      navigate("SchedulingComplete")
    } catch (err) {
      Alert.alert("Não foi possível confirmar o agendamento.")
    }
  }
  const theme = useTheme()
  return (
    <Container>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
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
