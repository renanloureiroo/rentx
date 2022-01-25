import React, { useState } from "react"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"

import * as ImagePicker from "expo-image-picker"
import * as Yup from "yup"

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
import { Keyboard, KeyboardAvoidingView, Alert } from "react-native"
import { Button } from "../../components/Button"
import { PasswordInput } from "../../components/PasswordInput"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useAuth } from "../../hooks/Auth"
import { useToast } from "react-native-toast-notifications"

interface Props {
  cancelled: boolean
  height: number
  type: string
  uri: string
  width: number
}

export const Profile = () => {
  const { user, signOut, updateUser } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [driver_license, setDriver_license] = useState(user.driver_license)

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [avatar, setAvatar] = useState(user.avatar)

  const [loading, setLoading] = useState(false)

  const [isActive, setIsActive] = useState<"data" | "changePassword">("data")
  const theme = useTheme()
  const toast = useToast()

  const handleSetData = () => {
    setIsActive("data")
  }

  const handleSetPassword = () => {
    setIsActive("changePassword")
  }

  const handleSignOut = async () => {
    Alert.alert(
      "Tem certeza que quer sair?",
      "Ao sair, será preciso conexão com a internet para entrar novamente!",
      [
        { text: "Cancelar", onPress: () => {} },
        { text: "Sair", onPress: () => signOut() },
      ]
    )
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

  const handleUpdateUser = async () => {
    setLoading(true)
    try {
      const schema = Yup.object().shape({
        driver_license: Yup.string().required("CNH é obrigatória"),
        name: Yup.string().required("Nome é obrigatório"),
      })

      const data = { name, driver_license }

      await schema.validate(data)
      updateUser({
        id: user.id,
        user_id: user.user_id,
        driver_license,
        name,
        email: user.email,
        avatar,
        token: user.token,
      })

      toast.show("Perfil atualizado!", {
        type: "success",
        placement: "top",
        duration: 3000,
        animationType: "slide-in",
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        toast.show(err.message, {
          type: "danger",
          placement: "top",
          duration: 3000,
          animationType: "slide-in",
        })
      } else {
        toast.show("Houve um erro ao atualizar o perfil!", {
          type: "danger",
          placement: "top",
          duration: 3000,
          animationType: "slide-in",
        })
      }
    } finally {
      setLoading(false)
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
                  value={name}
                  onChangeText={setName}
                  iconName="user"
                  autoCapitalize="words"
                  autoCorrect={false}
                />
                <Input value={email} iconName="mail" editable={false} />
                <Input
                  value={driver_license}
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

            <Button
              title="Salvar alterações"
              onPress={handleUpdateUser}
              loading={loading}
            />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
