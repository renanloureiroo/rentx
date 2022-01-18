import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import React, { useState } from "react"
import { Keyboard, KeyboardAvoidingView } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useTheme } from "styled-components"

import * as Yup from "yup"

import { BackButton } from "../../../components/BackButton"
import { Bullet } from "../../../components/Bullet"
import { Button } from "../../../components/Button"
import { PasswordInput } from "../../../components/PasswordInput"

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles"

export const SecondStep = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation()

  const theme = useTheme()

  const handleNextStep = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string()
        .email("Digite um e-mail válido")
        .required("E-mail é obrigatório"),
    })

    navigate("StepsComplete")
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

            <PasswordInput iconName="lock" placeholder="Senha" />
            <PasswordInput iconName="lock" placeholder="Repetir senha" />
          </Form>

          <Button title="Cadastrar" color={theme.colors.success} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
