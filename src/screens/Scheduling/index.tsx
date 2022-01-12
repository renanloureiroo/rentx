import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
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
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native"
import { format, parseISO } from "date-fns"
import { getPlatformDate } from "../../utils/getPlatformDate"
import { Alert } from "react-native"
import { CarDTO } from "../../dtos/CarDTO"

interface RentalPeriod {
  start: number
  startFormatted: string
  end: number
  endFormatted: string
}
interface Params {
  car: CarDTO
}

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  )
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  )

  const [markedDate, setMarkedDate] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  )
  const theme = useTheme()

  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()

  const { params } = useRoute()
  const { car } = params as Params

  const handleGoBack = () => {
    goBack()
  }

  const handleSchedulingDetails = () => {
    if (!rentalPeriod.start || !rentalPeriod.end) {
      return Alert.alert(
        "É preciso selecionar o período de aluguel do veículo!"
      )
    }
    navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDate),
      period: rentalPeriod,
    })
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }
    setLastSelectedDate(end)

    const interval = generateInterval(start, end)

    setMarkedDate(interval)

    const firstDate = Object.keys(interval)[0]
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]

    const rentalDates: RentalPeriod = {
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(
        getPlatformDate(parseISO(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(parseISO(lastDate)), "dd/MM/yyyy"),
    }

    setRentalPeriod(rentalDates)
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
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
          <Arrow />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentPeriod>
      </Header>

      <Content>
        <Calendar onDayPress={handleChangeDate} markedDates={markedDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleSchedulingDetails}
          enabled={!!rentalPeriod.endFormatted}
        />
      </Footer>
    </Container>
  )
}
