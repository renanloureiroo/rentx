import React, { useState } from "react"

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
import { useAuth } from "../../hooks/Auth"

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
  const [loading, setLoading] = useState<boolean>(false)
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()

  const { user } = useAuth()

  console.log(user)

  const { params } = useRoute()
  const { car, dates, period } = params as Params
  const total = car.price * dates.length

  const handleGoBack = () => {
    goBack()
  }

  const handleSchedulingComplete = async () => {
    setLoading(true)
    try {
      await api.post("/rentals", {
        car_id: car.id,
        start_date: period.startFormatted,
        end_date: period.endFormatted,
        total,
      })

      navigate("Confirmation", {
        title: "Carro alugado!",
        message: `Agora você só precisa ir{'\n'}até a concessionária da RENTX\npegar o seu automóvel.`,
      })
    } catch (err) {
      setLoading(false)
      Alert.alert("Não foi possível confirmar o agendamento.")
      console.log(err)
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
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
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
              R${car.price} x {dates.length} diárias
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
          loading={loading}
          enabled={!loading}
        />
      </Footer>
    </Container>
  )
}
