import React from "react"
import { Feather } from "@expo/vector-icons"
import {
  Container,
  IconContainer,
  InputText,
  ChanePasswordVisibilityButton,
} from "./styles"
import { useTheme } from "styled-components"
import { TextInputProps } from "react-native"

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"]
}

export const PasswordInput = ({ iconName, ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText {...rest} placeholderTextColor={theme.colors.text_detail} />
      <ChanePasswordVisibilityButton>
        <Feather name="eye" size={24} color={theme.colors.text_detail} />
      </ChanePasswordVisibilityButton>
    </Container>
  )
}
