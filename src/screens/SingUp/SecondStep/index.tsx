import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import React, { useState } from "react"
import { Keyboard, KeyboardAvoidingView } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

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

  const handleNextStep = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string()
        .email("Digite um e-mail válido")
        .required("E-mail é obrigatório"),
    })
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Header>
          <BackButton onPress={goBack} />
          <Steps>
            <Bullet active />
            <Bullet />
          </Steps>
        </Header>
        <KeyboardAvoidingView behavior="position" enabled>
          <Title>Crie sua{"\n"}conta</Title>

          <Subtitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>

            <PasswordInput iconName="lock" />
            <PasswordInput iconName="lock" />
          </Form>

          <Button title="Próximo" />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
