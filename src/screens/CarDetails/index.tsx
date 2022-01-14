import React from "react"
import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"

import Animated, {
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

interface Params {
  car: CarDTO
}

export const CarDetails = () => {
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()

  const route = useRoute()

  const scrollY = useSharedValue(0)

  const { car } = route.params as Params

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
    console.log(event.contentOffset.y)
  })

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate();
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
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRl",
              }).format(car.rent.price)}
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
