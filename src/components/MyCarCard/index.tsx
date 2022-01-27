import React from "react"

import { AntDesign } from "@expo/vector-icons"

import { CarDTO } from "../../dtos/CarDTO"

import { Container, Footer, Period, PeriodSchedule, Date } from "./styles"
import { useTheme } from "styled-components"
import { CardCar } from "../CardCar"
import { format, parseISO } from "date-fns"
import { getPlatformDate } from "../../utils/getPlatformDate"
import { Car } from "../../database/model/Car"

interface Props {
  data: {
    user_id: number
    car: CarDTO
    id: number
    start_date: string
    end_date: string
    total: string
  }
}

export const MyCarCard = ({ data }: Props) => {
  const theme = useTheme()
  const startFormatted = format(
    getPlatformDate(parseISO(data.start_date)),
    "dd/MM/yyyy"
  )
  const endFormatted = format(
    getPlatformDate(parseISO(data.end_date)),
    "dd/MM/yyyy"
  )

  const { car } = data
  const carData = {
    name: car.name,
    brand: car.brand,
    about: car.about,
    fuel_type: car.fuel_type,
    period: car.period,
    price: car.price,
    thumbnail: car.thumbnail,
  } as Car

  return (
    <Container>
      <CardCar data={carData} enabled={false} />

      <Footer>
        <Period>PERÍODO</Period>

        <PeriodSchedule>
          <Date>{startFormatted}</Date>
          <AntDesign
            name="arrowright"
            size={14}
            color={theme.colors.text_detail}
          />
          <Date>{endFormatted}</Date>
        </PeriodSchedule>
      </Footer>
    </Container>
  )
}
