import React from "react"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"

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
  About,
} from "./styles"

export const CardDetails = () => {
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  )
}
