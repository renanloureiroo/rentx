import React, { useEffect, useRef, useState } from "react"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { RFValue } from "react-native-responsive-fontsize"

import { useNetInfo } from "@react-native-community/netinfo"
import { synchronize } from "@nozbe/watermelondb/sync"
import { database } from "../../database"

import api from "../../services/api"

import { CardCar } from "../../components/CardCar"
import { Container, Header, TotalCars, ContentHeader, CarList } from "./styles"

import Logo from "../../assets/logo.svg"

import { LoadAnimation } from "../../components/LoadAnimation"

import { Car } from "../../database/model/Car"

export const Home = () => {
  const [cars, setCars] = useState<Car[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const netInfo = useNetInfo()
  const synchronizing = useRef(false)

  const handleCarDetails = (car: Car) => {
    navigate("CarDetails", { car: car })
  }

  const offlineSynchronize = async () => {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(
          `cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`
        )

        const { changes, latestVersion } = response.data

        return { changes, timestamp: latestVersion }
      },
      pushChanges: async ({ changes }) => {
        const user = changes.user
        await api.post("/users/sync", user)
      },
    })
  }

  useEffect(() => {
    let isMounted = true
    const fetchCars = async () => {
      try {
        const carCollection = database.get<Car>("cars")
        const cars = await carCollection.query().fetch()

        if (isMounted) setCars(cars)
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
    const syncChanges = async () => {
      if (netInfo.isConnected && !synchronizing.current) {
        synchronizing.current = true
        await offlineSynchronize()
        try {
        } catch (err) {
          console.log(err)
        } finally {
          synchronizing.current = false
        }
      }
    }
    syncChanges()
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
    </Container>
  )
}
