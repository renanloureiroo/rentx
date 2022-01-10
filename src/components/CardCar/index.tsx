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

import { RFValue } from "react-native-responsive-fontsize"
import { RectButtonProps } from "react-native-gesture-handler"

import EnergySvg from "../../assets/energy.svg"
import { CarDTO } from "../../dtos/CarDTO"

interface Props extends RectButtonProps {
  data: CarDTO
}
export const CardCar = ({ data, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Model>{data.name}</Model>

        <About>
          <Period>{data.rent.period}</Period>
          <PriceContainer>
            <Price>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(data.rent.price)}
            </Price>
            <Type>
              <EnergySvg width={RFValue(20)} height={RFValue(20)} />
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
