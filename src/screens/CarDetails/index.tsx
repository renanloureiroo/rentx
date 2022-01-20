import React from "react"
import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated"

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles"

import { Button } from "../../components/Button"
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
  useRoute,
} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { CarDTO } from "../../dtos/CarDTO"
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"
import { StyleSheet } from "react-native"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { useTheme } from "styled-components"

interface Params {
  car: CarDTO
}

export const CarDetails = () => {
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()
  const theme = useTheme()
  const route = useRoute()

  const { car } = route.params as Params

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
    console.log(event.contentOffset.y)
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 80],
        Extrapolate.CLAMP
      ),
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 100], [1, 0], Extrapolate.CLAMP),
    }
  })

  const handleGoBack = () => {
    goBack()
  }

  const handleScheduling = () => {
    navigate("Scheduling", { car: car })
  }
  return (
    <Container>
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRl",
              }).format(car.price)}
            </Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>
          {car.about} {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleScheduling}
        />
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
})
