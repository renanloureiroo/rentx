import React, { useState } from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import * as ImagePicker from "expo-image-picker"

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

interface Props {
  cancelled: boolean
  height: number
  type: string
  uri: string
  width: number
}

export const Profile = () => {
  const { user, signOut } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [driver_license, setDriver_license] = useState(user.driver_license)

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [avatar, setAvatar] = useState(user.avatar)

  const [isActive, setIsActive] = useState<"data" | "changePassword">("data")
  const theme = useTheme()

  const handleSetData = () => {
    setIsActive("data")
  }

  const handleSetPassword = () => {
    setIsActive("changePassword")
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const handleSelectAvatar = async () => {
    try {
      const result = (await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      })) as Props
      if (result.cancelled) return

      if (!result.cancelled) setAvatar(result.uri)
    } catch (error) {
      console.log(error)
    }
  }
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
              {!!avatar && (
                <Avatar
                  source={{
                    uri: avatar,
                  }}
                />
              )}

              <ChangeAvatarWrapper onPress={handleSelectAvatar}>
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
