import React, { useEffect } from "react"

import BrandSvg from "../../assets/brand.svg"
import LogoSvg from "../../assets/logo.svg"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated"

import { Container } from "./styles"
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native"

export const Splash = () => {
  const splashAnimated = useSharedValue(0)

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

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

  const startApp = () => {
    navigate("Home")
  }
  useEffect(() => {
    splashAnimated.value = withTiming(
      50,
      {
        duration: 2000,
      },
      () => {
        "worklet"
        runOnJS(startApp)()
      }
    )
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
