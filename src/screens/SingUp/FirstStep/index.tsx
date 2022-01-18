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
import { Input } from "../../../components/Input"

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles"

export const FirstStep = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [driverLicense, setDriverLicense] = useState("")

  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation()

  const handleNextStep = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail é obrigatório"),
        driverLicense: Yup.string().required("CNH é obrigatório"),
      })
      const data = { name, email, driverLicense }

      await schema.validate(data)
      navigate("SecondStep", { user: data })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // TODO
      } else {
        // TODO
      }
    }
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

            <Input
              iconName="user"
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              autoCorrect={false}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              value={driverLicense}
              onChangeText={setDriverLicense}
              keyboardType="numeric"
            />
          </Form>

          <Button title="Próximo" onPress={handleNextStep} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
