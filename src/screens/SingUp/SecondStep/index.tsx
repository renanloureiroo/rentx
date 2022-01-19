import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native"
import React, { useState } from "react"
import { Keyboard, KeyboardAvoidingView } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useTheme } from "styled-components"

import { BackButton } from "../../../components/BackButton"
import { Bullet } from "../../../components/Bullet"
import { Button } from "../../../components/Button"
import { PasswordInput } from "../../../components/PasswordInput"
import api from "../../../services/api"

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles"

interface Params {
  user: {
    name: string
    email: string
    driverLicense: string
  }
}

export const SecondStep = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation()

  const route = useRoute()

  const { user } = route.params as Params

  const theme = useTheme()

  const handleNextStep = async () => {
    if (!password || !confirmPassword) {
      throw new Error("Campos de senha não preenchidos!")
    }

    if (password != confirmPassword) {
      throw new Error("As senhas não são iguais!")
    }

    // Criar usuário

    const data = {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password,
    }
    console.log(data)
    await api
      .post("/users/", data)
      .then(() => {
        navigate("Confirmation", {
          title: "Conta criada!",
          nextScreenRoute: "SignIn",
        })
      })
      .catch((err) => console.log(err.message))

    // if (response.status !== 201) {
    //   throw new Error("Ocorreu um erro ao cadastrar usuário!")
    // }
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Header>
          <BackButton onPress={goBack} />
          <Steps>
            <Bullet />
            <Bullet active />
          </Steps>
        </Header>
        <KeyboardAvoidingView behavior="position" enabled>
          <Title>Crie sua{"\n"}conta</Title>

          <Subtitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</Subtitle>

          <Form>
            <FormTitle>2. Senhas</FormTitle>

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleNextStep}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
