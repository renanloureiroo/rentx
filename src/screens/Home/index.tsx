import React, { useEffect, useState } from "react"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { RFValue } from "react-native-responsive-fontsize"
import { Ionicons } from "@expo/vector-icons"

import api from "../../services/api"
import { CarDTO } from "../../dtos/CarDTO"

import { CardCar } from "../../components/CardCar"
import {
  Container,
  Header,
  TotalCars,
  ContentHeader,
  CarList,
  MyCarsButton,
} from "./styles"

import Logo from "../../assets/logo.svg"
import { Load } from "../../components/Load"
import { useTheme } from "styled-components"

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const theme = useTheme()
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

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <ContentHeader>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de carros 12</TotalCars>
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

      <MyCarsButton onPress={handleMyCars}>
        <Ionicons name="car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  )
}
