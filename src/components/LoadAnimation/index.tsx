import React from "react"

import LottieView from "lottie-react-native"

import Loading from "../../assets/loading.json"

import { Container } from "./styles"

export const LoadAnimation = () => {
  return (
    <Container>
      <LottieView
        source={Loading}
        autoPlay
        style={{ height: 200 }}
        loop
        resizeMode="contain"
      />
    </Container>
  )
}
