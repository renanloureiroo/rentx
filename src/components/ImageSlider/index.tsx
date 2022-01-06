import React from "react"

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CardWrapper,
  CardImage,
} from "./styles"

interface Props {
  imagesUrl: string[]
}

export const ImageSlider = ({ imagesUrl }: Props) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CardWrapper>
        <CardImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CardWrapper>
    </Container>
  )
}
