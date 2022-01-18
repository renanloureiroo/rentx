import React from "react"
import { boolean } from "yup/lib/locale"

import { Container } from "./styles"

interface Props {
  active: boolean
}

export const Bullet = ({ active }: Props) => {
  return <Container active={active} />
}
