import React, { useEffect, useState } from "react"
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
  OfflineInfo,
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
import { Car } from "../../database/model/Car"
import api from "../../services/api"
import { useNetInfo } from "@react-native-community/netinfo"

interface Params {
  car: Car
}

export const CarDetails = () => {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation()
  const theme = useTheme()
  const route = useRoute()

  const { car } = route.params as Params
  const { isConnected } = useNetInfo()

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
    console.log("Voltar")
    goBack()
  }

  const handleScheduling = () => {
    navigate("Scheduling", { car: carUpdated })
  }

  useEffect(() => {
    const fetchCarUpdated = async () => {
      const response = await api.get(`/cars/${car.id}`)
      if (response.status === 200) setCarUpdated(response.data)
    }

    if (isConnected === true) fetchCarUpdated()
  }, [isConnected])

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
            <ImageSlider
              imagesUrl={
                !!carUpdated.photos
                  ? carUpdated.photos
                  : [
                      {
                        id: car.thumbnail,
                        car_id: car.thumbnail,
                        photo: car.thumbnail,
                      },
                    ]
              }
            />
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
              {isConnected === true ? "R$" + carUpdated.price : "R$..."}
            </Price>
          </Rent>
        </Details>

        {!!carUpdated.accessories && (
          <Accessories>
            {carUpdated.accessories.map((accessory) => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))}
          </Accessories>
        )}

        <About>{car.about}</About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleScheduling}
          enabled={isConnected === true}
        />
        {isConnected === false && (
          <OfflineInfo>
            Conecte-se a internet para obter mais detalhes!
          </OfflineInfo>
        )}
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
