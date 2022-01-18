import React, { useState } from "react"

import * as Yup from "yup"

import { BackButton } from "../../../components/BackButton"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"

import { Container, Form, FormTitle, Header, Subtitle, Title } from "./styles"

export const FirstStep = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cnh, setCnh] = useState("")

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
      <BackButton />
      <Header>
        <Title>Crie sua{"\n"}conta</Title>

        <Subtitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</Subtitle>
      </Header>

      <Form>
        <FormTitle>1. Dados</FormTitle>

        <Input
          iconName="user"
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <Input
          iconName="mail"
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          iconName="credit-card"
          placeholder="CNH"
          value={cnh}
          onChangeText={setCnh}
        />
      </Form>

      <Button title="Próximo" />
    </Container>
  )
}
