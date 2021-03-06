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

import { getAccessoryIcon } from "../../utils/getAccessoryIcon"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import { useWindowDimensions } from "react-native"
import { Car } from "../../database/model/Car"
import { useNetInfo } from "@react-native-community/netinfo"

interface Props extends RectButtonProps {
  data: Car
  duration?: number
}

export const CardCar = ({ data, duration = 1000, ...rest }: Props) => {
  const { width } = useWindowDimensions()
  const opacity = useSharedValue(0)
  const positionX = useSharedValue(0.25 * width)
  const { isConnected } = useNetInfo()

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
            <Period>{data.period}</Period>
            <PriceContainer>
              <Price>
                {isConnected === true ? "R$" + data.price : "R$..."}
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
