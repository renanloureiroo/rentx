import React from "react"
import { Button, StyleSheet, useWindowDimensions } from "react-native"

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated"

import { Container } from "./styles"

export const Splash = () => {
  const animated = useSharedValue(0)
  const { width } = useWindowDimensions()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animated.value }],
    }
  })

  const handleAnimationPosition = () => {
    animated.value = withTiming(Math.random() * (width - 100), {
      duration: 5000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    })
  }

  return (
    <Container>
      <Animated.View style={[styles.container, animatedStyles]} />

      <Button title="Mover" onPress={handleAnimationPosition} />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
})
