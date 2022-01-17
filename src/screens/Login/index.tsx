import { StatusBar } from "expo-status-bar"
import React from "react"
import { Text } from "react-native"
import { useTheme } from "styled-components"
import { Button } from "../../components/Button"

import { Container, Title, Subtitle, Header, Footer } from "./styles"

export const Login = () => {
  const theme = useTheme()
  return (
    <Container>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        <Subtitle>
          Faça seu login para começar{"\n"}uma experiência incrível.
        </Subtitle>
      </Header>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={true}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          enabled={true}
          loading={false}
          color={theme.colors.background_secondary}
          light
        />
      </Footer>
    </Container>
  )
}
