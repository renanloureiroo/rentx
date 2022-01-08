import React from "react"
import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"

import { Feather } from "@expo/vector-icons"

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  CalendarIcon,
  PriceContainer,
} from "./styles"

import Speed from "../../assets/speed.svg"
import Acceleration from "../../assets/acceleration.svg"
import Force from "../../assets/force.svg"
import Gasoline from "../../assets/gasoline.svg"
import Exchange from "../../assets/exchange.svg"
import People from "../../assets/people.svg"
import { Button } from "../../components/Button"
import { useTheme } from "styled-components"

export const SchedulingDetails = () => {
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamburguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380km/h" icon={Speed} />
          <Accessory name="3.2s" icon={Acceleration} />
          <Accessory name="800 HP" icon={Force} />
          <Accessory name="Gasolina" icon={Gasoline} />
          <Accessory name="Auto" icon={Exchange} />
          <Accessory name="2 pessoas" icon={People} />
        </Accessories>

        <RentPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              color={theme.colors.background_secondary}
              size={24}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>07/01/2022</DateValue>
          </DateInfo>
          <Feather name="chevron-right" color={theme.colors.text} size={20} />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>07/01/2022</DateValue>
          </DateInfo>
        </RentPeriod>

        <PriceContainer></PriceContainer>
      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} />
      </Footer>
    </Container>
  )
}
