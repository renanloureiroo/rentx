import React, { useEffect } from "react"

import { Ionicons } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"
import { CarDTO } from "../../dtos/CarDTO"
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"

import { Container, Footer, Period, PeriodSchedule, Date } from "./styles"
import { useTheme } from "styled-components"
import { CardCar } from "../CardCar"

interface Props {
  data: {
    user_id: number
    car: CarDTO
    id: number
    period: {
      start: number
      startFormatted: string
      end: number
      endFormatted: string
    }
  }
}

export const MyCarCard = ({ data }: Props) => {
  const Icon = getAccessoryIcon(data.car.fuel_type)
  const theme = useTheme()

  return (
    <Container>
      <CardCar data={data.car} />

      <Footer>
        <Period>PERÍODO</Period>

        <PeriodSchedule>
          <Date>{data.period.startFormatted}</Date>
          <Ionicons
            name="ios-arrow-forward"
            size={14}
            color={theme.colors.text_detail}
          />
          <Date>{data.period.endFormatted}</Date>
        </PeriodSchedule>
      </Footer>
    </Container>
  )
}
