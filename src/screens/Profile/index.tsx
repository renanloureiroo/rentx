import React from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import { Ionicons } from "@expo/vector-icons"

import {
  Container,
  Header,
  HeaderTop,
  Title,
  LogOutButton,
  AvatarWrapper,
  Avatar,
} from "./styles"

export const Profile = () => {
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.shape} />

          <Title>Editar Perfil</Title>

          <LogOutButton>
            <Ionicons name="power" size={24} color={theme.colors.text_detail} />
          </LogOutButton>
        </HeaderTop>
        <AvatarWrapper>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/63200402?v=4",
            }}
          />
        </AvatarWrapper>
      </Header>
    </Container>
  )
}
