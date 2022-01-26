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

import NetInfo, { useNetInfo } from "@react-native-community/netinfo"

import api from "../../services/api"
import { CarDTO } from "../../dtos/CarDTO"

import { CardCar } from "../../components/CardCar"
import { Container, Header, TotalCars, ContentHeader, CarList } from "./styles"

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

import Logo from "../../assets/logo.svg"

import { useTheme } from "styled-components"
import Animated, { useSharedValue } from "react-native-reanimated"

import { LoadAnimation } from "../../components/LoadAnimation"
import { Alert } from "react-native"

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const theme = useTheme()

  const netInfo = useNetInfo()

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  // const myCarsButtonStyleAnimated = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: positionX.value,
  //       },

  //       {
  //         translateY: positionY.value,
  //       },
  //     ],
  //   }
  // })

  // const onGestureEvent = useAnimatedGestureHandler({
  //   onStart(_, ctx: any) {
  //     ctx.positionX = positionX.value
  //     ctx.positionY = positionY.value
  //   },

  //   onActive(event, ctx: any) {
  //     positionX.value = ctx.positionX + event.translationX
  //     positionY.value = ctx.positionY + event.translationY
  //   },

  //   onEnd() {},
  // })

  const handleCarDetails = (car: CarDTO) => {
    navigate("CarDetails", { car: car })
  }

  useEffect(() => {
    let isMounted = true
    const fetchCars = async () => {
      try {
        const response = await api.get("/cars")

        if (isMounted) setCars(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchCars()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (netInfo.isConnected) {
      Alert.alert("Você está conectado")
    } else {
      Alert.alert("Você está offline")
    }
  }, [netInfo.isConnected])

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
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <CardCar
              onPress={() => handleCarDetails(item)}
              data={item}
              duration={1000 + index * 100}
            />
          )}
        />
      )}

      {/* <PanGestureHandler onGestureEvent={onGestureEvent}>
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
      </PanGestureHandler> */}
    </Container>
  )
}
