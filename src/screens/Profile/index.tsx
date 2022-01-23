import React, { useState } from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import { Ionicons } from "@expo/vector-icons"

import {
  Container,
  Header,
  HeaderTop,
  Title,
  LogoutButton,
  AvatarWrapper,
  Avatar,
  Content,
  Form,
} from "./styles"
import { Input } from "../../components/Input"
import { KeyboardAvoidingView, Platform } from "react-native"
import { Button } from "../../components/Button"

export const Profile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [driver_license, setDriver_license] = useState("")
  const theme = useTheme()

  const handleSignOut = () => {}
  return (
    <KeyboardAvoidingView behavior={"height"} enabled>
      <Container>
        <Header>
          <HeaderTop>
            <BackButton color={theme.colors.shape} />

            <Title>Editar Perfil</Title>

            <LogoutButton onPress={handleSignOut}>
              <Ionicons
                name="power"
                size={24}
                color={theme.colors.text_detail}
              />
            </LogoutButton>
          </HeaderTop>
          <AvatarWrapper>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/63200402?v=4",
              }}
            />
          </AvatarWrapper>
        </Header>

        <Content>
          <Form>
            <Input
              value={name}
              onChangeText={setName}
              iconName="user"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <Input
              value={email}
              onChangeText={setEmail}
              iconName="mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              value={driver_license}
              onChangeText={setDriver_license}
              iconName="credit-card"
              keyboardType="numeric"
            />
          </Form>

          <Button title="Salvar alterações" onPress={() => {}} />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  )
}
