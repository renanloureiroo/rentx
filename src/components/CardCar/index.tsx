import React from "react"

import {
  About,
  Brand,
  CardImage,
  Container,
  Details,
  Model,
  Period,
  Price,
  PriceContainer,
  Type,
} from "./styles"

import Icon from "../../assets/energy.svg"
import { RFValue } from "react-native-responsive-fontsize"

interface CarData {
  brand: string
  model: string
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

interface Props {
  data: CarData
}
export const CardCar = ({ data }: Props) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Model>{data.model}</Model>

        <About>
          <Period>{data.rent.period}</Period>
          <PriceContainer>
            <Price>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                notation: "compact",
              }).format(data.rent.price)}
            </Price>
            <Type>
              <Icon width={RFValue(20)} height={RFValue(20)} />
            </Type>
          </PriceContainer>
        </About>
      </Details>

      <CardImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  )
}
