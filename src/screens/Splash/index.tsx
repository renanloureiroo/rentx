import React, { useEffect } from "react"
import { Button, StyleSheet, useWindowDimensions } from "react-native"

import BrandSvg from "../../assets/brand.svg"
import LogoSvg from "../../assets/logo.svg"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolate,
} from "react-native-reanimated"

import { Container } from "./styles"

export const Splash = () => {
  const splashAnimated = useSharedValue(0)

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimated.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimated.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimated.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimated.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    }
  })

  useEffect(() => {
    splashAnimated.value = withTiming(50, {
      duration: 2000,
    })
  })

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  )
}
