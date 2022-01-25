import React, { useState } from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

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
  SwitchForm,
  TitleWrapper,
  TitleSwitch,
  ChangeAvatarWrapper,
} from "./styles"
import { Input } from "../../components/Input"
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native"
import { Button } from "../../components/Button"
import { PasswordInput } from "../../components/PasswordInput"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useAuth } from "../../hooks/Auth"

export const Profile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [driver_license, setDriver_license] = useState("")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [isActive, setIsActive] = useState<"data" | "changePassword">("data")
  const theme = useTheme()

  const { user } = useAuth()

  const handleSetData = () => {
    setIsActive("data")
  }

  const handleSetPassword = () => {
    setIsActive("changePassword")
  }

  const handleSignOut = () => {}
  return (
    <KeyboardAvoidingView behavior={"position"} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

              <ChangeAvatarWrapper>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </ChangeAvatarWrapper>
            </AvatarWrapper>
          </Header>

          <Content>
            <SwitchForm>
              <TitleWrapper onPress={handleSetData}>
                <TitleSwitch active={isActive == "data"}>Dados</TitleSwitch>
              </TitleWrapper>

              <TitleWrapper onPress={handleSetPassword}>
                <TitleSwitch active={isActive == "changePassword"}>
                  Trocar senha
                </TitleSwitch>
              </TitleWrapper>
            </SwitchForm>

            {isActive == "data" ? (
              <Form>
                <Input
                  defaultValue={user.name}
                  onChangeText={setName}
                  iconName="user"
                  autoCapitalize="words"
                  autoCorrect={false}
                />
                <Input
                  defaultValue={user.email}
                  onChangeText={setEmail}
                  iconName="mail"
                  editable={false}
                />
                <Input
                  defaultValue={user.driver_license}
                  onChangeText={setDriver_license}
                  iconName="credit-card"
                  keyboardType="numeric"
                />
              </Form>
            ) : (
              <Form>
                <PasswordInput
                  placeholder="Senha atual"
                  iconName="lock"
                  value={password}
                  onChangeText={setPassword}
                />
                <PasswordInput
                  placeholder="Nova senha"
                  iconName="lock"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <PasswordInput
                  placeholder="Repetir senha"
                  iconName="lock"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </Form>
            )}

            <Button title="Salvar alterações" onPress={() => {}} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
