import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native"
import { useTheme } from "styled-components"
import * as Yup from "yup"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { PasswordInput } from "../../components/PasswordInput"

import { Container, Title, Subtitle, Header, Footer, Form } from "./styles"

import { useAuth } from "../../hooks/Auth"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const theme = useTheme()
  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  const { signIn } = useAuth()

  const handleRegisterScreen = () => {
    navigate("FirstStep")
  }

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail é obrigatório")
          .email("Digite uma e-mail válido"),

        password: Yup.string().required("Senha é obrigatório"),
      })
      await schema.validate({ email, password })

      await signIn({ email, password })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message)
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        )
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar style="dark" backgroundColor="transparent" translucent />
          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <Subtitle>
              Faça seu login para começar{"\n"}uma experiência incrível.
            </Subtitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={handleRegisterScreen}
              enabled={true}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
