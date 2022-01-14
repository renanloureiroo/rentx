import React, { useEffect, useState } from "react"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { RFValue } from "react-native-responsive-fontsize"
import { PanGestureHandler, RectButton } from "react-native-gesture-handler"
import { Ionicons } from "@expo/vector-icons"

import api from "../../services/api"
import { CarDTO } from "../../dtos/CarDTO"

import { CardCar } from "../../components/CardCar"
import { Container, Header, TotalCars, ContentHeader, CarList } from "./styles"

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

import Logo from "../../assets/logo.svg"
import { Load } from "../../components/Load"
import { useTheme } from "styled-components"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from "react-native-reanimated"
import { BackHandler, StyleSheet } from "react-native"

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const theme = useTheme()

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX.value,
        },

        {
          translateY: positionY.value,
        },
      ],
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },

    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX
      positionY.value = ctx.positionY + event.translationY
    },

    onEnd() {},
  })

  const handleCarDetails = (car: CarDTO) => {
    navigate("CarDetails", { car: car })
  }

  const handleMyCars = () => {
    navigate("MyCars")
  }

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/cars")

        setCars(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  }, [])

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <ContentHeader>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>Total de carros {cars.length}</TotalCars>}
        </ContentHeader>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCar onPress={() => handleCarDetails(item)} data={item} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: "absolute",
              right: 22,
              bottom: 16,
            },

            myCarsButtonStyleAnimated,
          ]}
        >
          <ButtonAnimated
            onPress={handleMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons name="car-sport" size={32} color={theme.colors.shape} />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})
