import React, { useRef, useState } from "react"
import { FlatList, ViewToken } from "react-native"
import { Bullet } from "../Bullet"

import { Container, ImageIndexes, CardWrapper, CardImage } from "./styles"

interface Props {
  imagesUrl: string[]
}
interface ChangedImageProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

export const ImageSlider = ({ imagesUrl }: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const indexChanged = useRef((info: ChangedImageProps) => {
    setImageIndex(info.viewableItems[0].index)
  })
  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <Bullet key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CardWrapper>
            <CardImage source={{ uri: item }} resizeMode="contain" />
          </CardWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  )
}
