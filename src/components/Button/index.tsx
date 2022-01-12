import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"

import { Container, Title } from "./styles"

interface Props extends RectButtonProps {
  title: string
  color?: string
  enabled?: boolean
}

export const Button = ({ title, color, enabled = true, ...rest }: Props) => {
  return (
    <Container color={color} {...rest} enabled={enabled}>
      <Title>{title}</Title>
    </Container>
  )
}
