import React, { useEffect } from "react"

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

import { CarDTO } from "../../dtos/CarDTO"
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import { useWindowDimensions } from "react-native"

interface Props extends RectButtonProps {
  data: CarDTO
  duration?: number
}

export const CardCar = ({ data, duration = 1000, ...rest }: Props) => {
  const { width } = useWindowDimensions()
  const opacity = useSharedValue(0)
  const positionX = useSharedValue(0.25 * width)

  const CardCarStylesAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          translateX: positionX.value,
        },
      ],
    }
  })

  const Icon = getAccessoryIcon(data.fuel_type)

  useEffect(() => {
    opacity.value = withTiming(1, { duration: duration })
    positionX.value = withTiming(0, { duration: duration })
  }, [])

  return (
    <Animated.View style={CardCarStylesAnimated}>
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
    </Animated.View>
  )
}
