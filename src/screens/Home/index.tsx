import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import React, { useEffect } from "react"
import { RFValue } from "react-native-responsive-fontsize"
import Logo from "../../assets/logo.svg"
import { CardCar } from "../../components/CardCar"

import { Container, Header, TotalCars, ContentHeader, CarList } from "./styles"
const carData = {
  brand: "audi",
  model: "RS 5 Coupé",
  rent: { period: "ao dia", price: 120 },
  thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
}
const carDataTwo = {
  brand: "porsche",
  model: "Panamera",
  rent: { period: "ao dia", price: 340 },
  thumbnail:
    "https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png",
}

export const Home = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const handleCarDetails = () => {
    navigate("CarDetails")
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <ContentHeader>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de carros 12</TotalCars>
        </ContentHeader>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <CardCar onPress={handleCarDetails} data={carData} />}
      />
    </Container>
  )
}
