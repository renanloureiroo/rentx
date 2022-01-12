import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"
import { MyCarCard } from "../../components/MyCarCard"
import { CarDTO } from "../../dtos/CarDTO"
import api from "../../services/api"

interface Cars {
  user_id: number
  car: CarDTO
  id: number
  period: {
    start: number
    startFormatted: string
    end: number
    endFormatted: string
  }
}

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  MyCarsList,
  ListTitleContainer,
  ListTitle,
  Contador,
  Loading,
} from "./styles"
export const MyCars = () => {
  const [cars, setCars] = useState<Cars[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  const theme = useTheme()

  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await api.get("/schedules_byuser?user_id=1")

        setCars(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    loadCars()
  }, [])
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />

        <Title>Seus agendamentos, estão aqui.</Title>
        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>

      <Content>
        <ListTitleContainer>
          <ListTitle>Agendamentos feitos</ListTitle>
          <Contador>{cars.length}</Contador>
        </ListTitleContainer>
        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color={theme.colors.main} />
          </Loading>
        ) : (
          <MyCarsList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <MyCarCard data={item} />}
          />
        )}
      </Content>
    </Container>
  )
}
