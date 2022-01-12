import React, { useEffect } from "react"

import { AntDesign } from "@expo/vector-icons"

import { CarDTO } from "../../dtos/CarDTO"

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
  const theme = useTheme()

  return (
    <Container>
      <CardCar data={data.car} enabled={false} />

      <Footer>
        <Period>PERÍODO</Period>

        <PeriodSchedule>
          <Date>{data.period.startFormatted}</Date>
          <AntDesign
            name="arrowright"
            size={14}
            color={theme.colors.text_detail}
          />
          <Date>{data.period.endFormatted}</Date>
        </PeriodSchedule>
      </Footer>
    </Container>
  )
}
